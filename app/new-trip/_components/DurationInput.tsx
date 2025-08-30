"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import React, { useState } from "react";

interface DurationInputProps {
  onSubmit: (duration: string) => void;
}

export default function DurationInput({ onSubmit }: DurationInputProps) {
  const [selectedDuration, setSelectedDuration] = useState("");
  const [customDays, setCustomDays] = useState("");

  const durationOptions = [
    { id: "weekend", label: "Weekend Getaway", days: "2-3 days", color: "bg-orange-100 text-orange-600" },
    { id: "short", label: "Short Trip", days: "4-7 days", color: "bg-blue-100 text-blue-600" },
    { id: "medium", label: "Extended Stay", days: "1-2 weeks", color: "bg-purple-100 text-purple-600" },
    { id: "long", label: "Long Adventure", days: "3+ weeks", color: "bg-emerald-100 text-emerald-600" },
    { id: "custom", label: "Custom Duration", days: "Choose your own", color: "bg-gray-100 text-gray-600" }
  ];

  const handleSubmit = () => {
    let result = selectedDuration;
    if (selectedDuration === "custom" && customDays) {
      result = `${customDays} days`;
    }
    if (result && result !== "custom") {
      onSubmit(result);
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-orange-500/5 to-purple-500/5 rounded-2xl p-4 border border-border/40">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-orange-500" />
          <span className="font-medium text-sm text-foreground">How long is your trip?</span>
        </div>
        
        <div className="grid grid-cols-1 gap-3 mb-4">
          {durationOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedDuration(option.id)}
              className={`w-full p-3 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedDuration === option.id 
                  ? `${option.color} border-current bg-current/10` 
                  : 'bg-white/60 border-border/40 hover:bg-white hover:border-border/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-foreground">{option.label}</p>
                  <p className="text-xs text-muted-foreground">{option.days}</p>
                </div>
                <Clock className={`w-4 h-4 ${selectedDuration === option.id ? 'text-current' : 'text-muted-foreground'}`} />
              </div>
            </button>
          ))}
        </div>

        {selectedDuration === "custom" && (
          <div className="mb-4">
            <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              How many days exactly?
            </label>
            <input
              type="number"
              value={customDays}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomDays(e.target.value)}
              placeholder="Enter number of days"
              min="1"
              max="365"
              className="w-full px-3 py-2 bg-white/80 border border-border/60 focus:border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm"
            />
          </div>
        )}

        <Button 
          onClick={handleSubmit}
          disabled={!selectedDuration || (selectedDuration === "custom" && !customDays)}
          className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl"
        >
          Continue with {selectedDuration === "custom" ? `${customDays} days` : selectedDuration}
        </Button>
      </div>
    </div>
  );
} 