"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React, { useState } from "react";

function ChatBot() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // TODO: Handle AI message sending
      console.log("Sending message:", message);
      setMessage("");
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
            <p className="text-sm text-muted-foreground">Ready to plan your perfect trip</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* AI Message */}
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">AI</span>
          </div>
          <div className="bg-muted/50 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
            <p className="text-sm">
              Hi! I'm your AI travel assistant. Tell me where you'd like to go and I'll help you create the perfect itinerary. 
              You can ask me about destinations, activities, budget, or any travel preferences you have.
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-3 justify-end">
          <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]">
            <p className="text-sm">I want to plan a trip from Auckland to Queenstown for 5 days</p>
          </div>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">U</span>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">AI</span>
          </div>
          <div className="bg-muted/50 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
            <p className="text-sm">
              Great choice! Queenstown is New Zealand's adventure capital. I'll help you plan an amazing 5-day trip. 
              What's your budget range and what activities interest you most? (adventure sports, wine tours, hiking, etc.)
            </p>
          </div>
        </div>
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
          />
          <Button 
            onClick={handleSend}
            disabled={!message.trim()}
            className="px-4 bg-primary hover:bg-primary/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;