"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Search, Plane } from "lucide-react";
import React, { useState } from "react";

interface DestinationInputProps {
  onSubmit: (destination: string) => void;
}

export default function DestinationInput({ onSubmit }: DestinationInputProps) {
  const [destination, setDestination] = useState("");

  const popularDestinations = [
    { name: "Paris, France", emoji: "🇫🇷" },
    { name: "Tokyo, Japan", emoji: "🇯🇵" },
    { name: "Bali, Indonesia", emoji: "🇮🇩" },
    { name: "New York, USA", emoji: "🇺🇸" },
    { name: "Santorini, Greece", emoji: "🇬🇷" },
    { name: "Queenstown, NZ", emoji: "🇳🇿" }
  ];

  const handleSubmit = () => {
    if (destination.trim()) {
      onSubmit(destination.trim());
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-4 border border-border/40">
        <div className="flex items-center gap-2 mb-3">
          <Plane className="w-5 h-5 text-accent" />
          <span className="font-medium text-sm text-foreground">Where would you like to explore?</span>
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={destination}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDestination(e.target.value)}
              placeholder="Enter your dream destination..."
              className="w-full pl-10 pr-4 py-2 bg-white/80 border border-border/60 focus:border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 text-sm"
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSubmit()}
            />
          </div>
          <Button 
            onClick={handleSubmit}
            disabled={!destination.trim()}
            className="bg-accent hover:bg-accent/90 rounded-xl px-4"
          >
            Continue
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Trending destinations</p>
        <div className="grid grid-cols-2 gap-2">
          {popularDestinations.map((dest, index) => (
            <button
              key={index}
              onClick={() => setDestination(dest.name)}
              className="flex items-center gap-2 px-3 py-2 text-xs bg-white/60 hover:bg-white border border-border/40 hover:border-accent/40 rounded-xl transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              <span>{dest.emoji}</span>
              <span>{dest.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 