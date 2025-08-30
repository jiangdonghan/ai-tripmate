"use client";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import React, { useState } from "react";

interface SourceInputProps {
  onSubmit: (location: string) => void;
}

export default function SourceInput({ onSubmit }: SourceInputProps) {
  const [location, setLocation] = useState("");

  const popularSources = [
    "Auckland, New Zealand",
    "Sydney, Australia", 
    "Tokyo, Japan",
    "London, UK",
    "New York, USA",
    "Singapore"
  ];

  const handleSubmit = () => {
    if (location.trim()) {
      onSubmit(location.trim());
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-4 border border-border/40">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="font-medium text-sm text-foreground">Where are you starting from?</span>
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
              placeholder="Enter your departure city..."
              className="w-full pl-10 pr-4 py-2 bg-white/80 border border-border/60 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSubmit()}
            />
          </div>
          <Button 
            onClick={handleSubmit}
            disabled={!location.trim()}
            className="bg-primary hover:bg-primary/90 rounded-xl px-4"
          >
            Continue
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Popular starting points</p>
        <div className="flex flex-wrap gap-2">
          {popularSources.map((source, index) => (
            <button
              key={index}
              onClick={() => setLocation(source)}
              className="px-3 py-1.5 text-xs bg-white/60 hover:bg-white border border-border/40 hover:border-primary/40 rounded-full transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              {source}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 