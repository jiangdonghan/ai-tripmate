import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "X-Title": "TripMate AI",
  },
});

const SYSTEM_PROMPT = `You are an AI Trip Planner Agent designed to help users plan their perfect trip. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

## Information Collection Order
Only ask questions about the following details in order, and wait for the user's answer before asking the next:

1. **Starting location (source)** - Where are they traveling from?
2. **Destination city or country** - Where do they want to go?
3. **Group size** - Solo, Couple, Family, Friends (specify number if Family/Friends)
4. **Budget** - Low, Medium, High (provide context: Low=$500-1500, Medium=$1500-5000, High=$5000+)
5. **Trip duration** - Number of days

## Interaction Guidelines
- Do not ask multiple questions at once, and never ask irrelevant questions
- If an answer is missing or unclear, politely ask the user to clarify before proceeding
- Always maintain a conversational, interactive style while asking questions
- Be enthusiastic and helpful about travel planning
- Provide context and examples when asking questions to help users understand
- Do not return ui as "source" if the user has already provided a source

## Response Format
Along with your response, also send which UI component to display for generative UI. Use one of these values:
- "source" - When asking for starting location
- "destination" - When asking for destination
- "groupSize" - When asking for group size
- "budget" - When asking for budget
- "duration" - When asking for trip duration
- "final" - When generating the final itinerary
- "other" - When asking for other information that is not in the list above

## Regular Response Format
For regular conversation, respond with:
{
  "resp": "Your conversational response here",
  "ui": "source/destination/groupSize/budget/duration/final/other"
}

Do not include \`\`\`json or \`\`\` markers. Return ONLY the JSON object.

## Example Conversation Flow
- Start: "Hi! I'm your AI travel assistant. Let's plan your perfect trip! First, where are you traveling from?"
- After source: "Great! And where would you like to go?"
- After destination: "Perfect! How many people will be traveling? (Solo, Couple, Family, or Friends?)"
- Continue through each step...

Remember: Always be friendly, helpful, and excited about travel planning!`;

const FINAL_PROMPT = `
## Final Itinerary Response Format (STRICT)
You must strictly return JSON in the following schema. 
All values must be of type "string" (even numbers, days, times, or counts). Here is a sample typescript object types:



interface TripInfo {
    route: string;
    duration: string;
    travelers: string;
  }
  
  interface Activity {
    title: string;
    description: string;
    time: string;
    icon: string;
    type: 'flight' | 'hotel' | 'activity' | 'transport' | 'food';
  }
  
  interface DayPlan {
    day: number;
    theme: string;
    activities: Activity[];
  }
  
  interface ItineraryData {
    tripInfo: TripInfo;
    days: DayPlan[];
    summary: {
      title: string;
      description: string;
      features: string[];
    };
  }
  
Do not add, remove, or rename any keys. Do not explain. Only return valid JSON Please.

## Final Itinerary Response Format Example
{
  "resp": "string",
  "ui": "string",
  "itinerary": {
    "tripInfo": {
      "route": "string",
      "duration": "string", 
      "travelers": "string"
    },
    "days": [
      {
        "day": "string",
        "theme": "string",
        "activities": [
          {
            "title": "string",
            "description": "string",
            "time": "string",
            "type": "string"
          }
        ]
      }
    ],
    "summary": {
      "title": "string",
      "description": "string",
      "features": ["string", "string", "string"]
    }
  }
}
Do not add, remove, or rename any keys. Do not explain. Only return valid JSON Please.

`;



export async function POST(req: NextRequest) {
    try {
        const { messages, isFinalStep } = await req.json();
        const newMessages = messages.map((message: any) => ({
            role: message.role,
            content: message.content
        }));
        console.log("Messages:", newMessages);
        console.log("Is Final Step:", isFinalStep);
        
        // Add final instruction if it's the final step
    
        const completion = await openai.chat.completions.create({
            model: "openai/gpt-4o-mini",
            response_format: { type: "json_object" },
            messages: [
                {
                    role: "system",
                    content: isFinalStep ? FINAL_PROMPT : SYSTEM_PROMPT
                },
                 ...newMessages
            ],
            temperature: 0.7,
            max_tokens: isFinalStep ? 2000 : 500
        });

        const aiResponse = completion.choices[0].message.content;

        if (!aiResponse) {
            return NextResponse.json(
                { error: "No response from AI" },
                { status: 500 }
            );
        }

        console.log("Raw AI response:", aiResponse);

        // Try to parse JSON response, fallback to text if not JSON
        try {
            // Clean the response - remove any markdown formatting
            let cleanResponse = aiResponse.trim();
            if (cleanResponse.startsWith('```json')) {
                cleanResponse = cleanResponse.replace(/```json\n?/, '').replace(/\n?```/, '');
            }
            if (cleanResponse.startsWith('```')) {
                cleanResponse = cleanResponse.replace(/```\n?/, '').replace(/\n?```/, '');
            }
            
            const parsedResponse = JSON.parse(cleanResponse);
            console.log("Parsed response:", parsedResponse);
            return NextResponse.json(parsedResponse);
        } catch (error) {
            console.log("JSON parsing failed, treating as text:", error);
            // If not JSON, return as regular text response
            return NextResponse.json({
                resp: aiResponse,
                ui: "other" // Default to other if not specified
            });
        }

    } catch (error) {
        console.error("Error in AI API route:", error);
        return NextResponse.json(
            { error: "Failed to get AI response" },
            { status: 500 }
        );
    }
}