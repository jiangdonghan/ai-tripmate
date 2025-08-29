"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI travel assistant. Tell me where you'd like to go and I'll help you create the perfect itinerary. You can ask me about destinations, activities, budget, or any travel preferences you have.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUI, setCurrentUI] = useState("source");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: message.trim(),
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setMessage("");
      setIsLoading(true);

      try {
        const response = await fetch('/api/aimodel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage.content }),
        });

        if (!response.ok) {
          throw new Error('Failed to get AI response');
        }

        const data = await response.json();
        
        // Handle both JSON and text responses
        let aiContent = "";
        let uiState = "source";
        
        console.log("API Response data:", data);
        console.log("API Response type:", typeof data);
        
        if (typeof data === 'string') {
          // If response is a string, try to parse it as JSON
          try {
            const parsedData = JSON.parse(data);
            aiContent = parsedData.resp || data;
            uiState = parsedData.ui || "source";
          } catch {
            aiContent = data;
          }
        } else if (data && typeof data === 'object') {
          // If response is already an object
          aiContent = data.resp || "I'm sorry, I couldn't process your request. Please try again.";
          uiState = data.ui || "source";
        } else {
          aiContent = "I'm sorry, I couldn't process your request. Please try again.";
        }
        
        console.log("Extracted content:", aiContent);
        console.log("Extracted UI state:", uiState);
        
        // Update UI state
        setCurrentUI(uiState);
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: aiContent,
          sender: 'ai',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I'm sorry, there was an error processing your request. Please try again.",
          sender: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col border-r border-border">
      {/* Chat Header */}
      <div className="p-6 border-b border-border bg-card/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">TripMate AI Assistant</h2>
            <p className="text-sm text-muted-foreground">
              {isLoading ? "Thinking..." : "Ready to plan your perfect trip"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Current UI: {currentUI}
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'ai' && (
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
            )}
            <div className={`rounded-2xl px-4 py-3 max-w-[80%] ${
              msg.sender === 'user' 
                ? 'bg-primary text-primary-foreground rounded-tr-md' 
                : 'bg-muted/50 rounded-tl-md'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
            </div>
            {msg.sender === 'user' && (
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">U</span>
              </div>
            )}
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <div className="bg-muted/50 rounded-2xl rounded-tl-md px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-border bg-card/50">
        <div className="flex gap-3">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tell me about your dream trip..."
            className="flex-1 resize-none border-border focus:border-primary"
            rows={2}
            disabled={isLoading}
          />
          <Button 
            onClick={handleSend}
            disabled={!message.trim() || isLoading}
            className="px-4 bg-primary hover:bg-primary/90 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;