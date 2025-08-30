"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles, MapPin, Globe } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'tool';
}

function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI travel assistant. Tell me where you'd like to go and I'll help you create the perfect itinerary. You can ask me about destinations, activities, budget, or any travel preferences you have.",
      role: 'assistant'
    }
  ]);
  const [userInput, setUserInput] = useState<string>("");
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
    if (userInput.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: userInput.trim(),
        role: 'user'
      };

      setMessages(prev => [...prev, userMessage]);
      setUserInput("");
      setIsLoading(true);

      try {
        const response = await fetch('/api/aimodel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        });

        if (!response.ok) {
          throw new Error('Failed to get AI response');
        }

        const data = await response.json();
        
        // Handle both JSON and text responses
        let aiContent = "";
        let uiState = "source";
        
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
        
        // Update UI state
        setCurrentUI(uiState);
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: aiContent,
          role: 'assistant'
        };

        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I'm sorry, there was an error processing your request. Please try again.",
          role: 'assistant'
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
    <div className="flex-1 flex flex-col bg-gradient-to-b from-background via-background to-muted/20 border-r-2 border-border/30">
      {/* Chat Header - Premium Design */}
      <div className="relative p-6 bg-white/80 backdrop-blur-sm border-b border-border/60" style={{ minHeight: '104px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="relative flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-xl text-foreground">TripMate AI</h2>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Globe className="w-3 h-3" />
              {isLoading ? "Planning your adventure..." : "Ready to explore the world with you"}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Current step</div>
            <div className="text-sm font-medium text-accent capitalize">{currentUI}</div>
          </div>
        </div>
      </div>

      {/* Chat Messages - Modern Cards */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-transparent to-muted/10">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            )}
            
            <div className={`max-w-[75%] ${msg.role === 'user' ? 'order-1' : ''}`}>
              <div className={`relative p-4 rounded-2xl shadow-sm border ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-primary/20 rounded-tr-md' 
                  : 'bg-white border-border/60 rounded-tl-md'
              }`}>
                {msg.role === 'assistant' && (
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                )}
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>
              <div className={`mt-2 text-xs text-muted-foreground ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.role === 'user' ? 'You' : 'TripMate AI'} • just now
              </div>
            </div>

            {msg.role === 'user' && (
              <div className="flex-shrink-0 order-2">
                <div className="w-10 h-10 bg-gradient-to-br from-muted-foreground to-muted-foreground/80 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Premium Loading indicator */}
        {isLoading && (
          <div className="flex gap-4 justify-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>
            <div className="bg-white border border-border/60 rounded-2xl rounded-tl-md p-4 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-muted-foreground ml-2">Crafting your perfect trip...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Premium Input Area */}
      <div className="p-6 bg-white/60 backdrop-blur-sm border-t border-border/60">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl"></div>
          <div className="relative flex gap-3 p-4 bg-white/80 rounded-2xl border border-border/40 shadow-lg">
            <div className="flex-1 relative">
              <Textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your dream destination, budget, or travel style..."
                className="border-0 bg-transparent resize-none focus-visible:ring-0 placeholder:text-muted-foreground/60 text-sm leading-relaxed"
                rows={2}
                disabled={isLoading}
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-xs text-muted-foreground/50">
                <MapPin className="w-3 h-3" />
                <span>Press Enter to send</span>
              </div>
            </div>
            <Button 
              onClick={handleSend}
              disabled={!userInput.trim() || isLoading}
              className="self-end bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Quick suggestions */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["🌏 Explore Asia", "🏖️ Beach getaway", "🏔️ Mountain adventure", "🍷 Wine tour"].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setUserInput(suggestion.split(' ').slice(1).join(' '))}
              className="px-3 py-1.5 text-xs bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full border border-border/40 transition-colors duration-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatBot;