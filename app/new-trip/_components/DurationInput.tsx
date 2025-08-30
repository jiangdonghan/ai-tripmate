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
    { id: "weekend", label: "Weekend Getaway", days: "2-3 days", value: "3", color: "bg-orange-100 text-orange-600" },
    { id: "short", label: "Short Trip", days: "4-7 days", value: "7", color: "bg-blue-100 text-blue-600" },
    { id: "medium", label: "Extended Stay", days: "1-2 weeks", value: "14", color: "bg-purple-100 text-purple-600" },
    { id: "long", label: "Long Adventure", days: "3+ weeks", value: "21", color: "bg-emerald-100 text-emerald-600" }
  ];

  const handleSubmit = () => {
    let result = "";
    if (selectedDuration && selectedDuration !== "custom") {
      const option = durationOptions.find(opt => opt.id === selectedDuration);
      result = `${option?.value} days`;
    } else if (customDays) {
      result = `${customDays} days`;
    }
    
    if (result) {
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
        
        <div className="mb-4">
          <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
            Enter exact number of days
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={customDays}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCustomDays(e.target.value);
                setSelectedDuration(""); // Clear preset selection when typing
              }}
              placeholder="e.g., 10"
              min="1"
              max="365"
              className="flex-1 px-3 py-2 bg-white/80 border border-border/60 focus:border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-sm"
            />
            <span className="flex items-center px-3 py-2 text-sm text-muted-foreground bg-muted/30 rounded-xl border border-border/40">
              days
            </span>
          </div>
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={!selectedDuration && !customDays}
          className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl"
        >
          Continue with {customDays ? `${customDays} days` : selectedDuration}
        </Button>
      </div>
    </div>
  );
} 