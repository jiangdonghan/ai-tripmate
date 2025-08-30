"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Accessibility, Heart, Utensils } from "lucide-react";
import React, { useState } from "react";

interface PreferencesInputProps {
  onSubmit: (preferences: string) => void;
}

export default function PreferencesInput({ onSubmit }: PreferencesInputProps) {
  const [preferences, setPreferences] = useState("");
  const [selectedPresets, setSelectedPresets] = useState<string[]>([]);

  const presetOptions = [
    { id: "accessibility", label: "Accessibility needs", icon: <Accessibility className="w-4 h-4" /> },
    { id: "dietary", label: "Dietary restrictions", icon: <Utensils className="w-4 h-4" /> },
    { id: "medical", label: "Medical considerations", icon: <Heart className="w-4 h-4" /> },
    { id: "none", label: "No special requirements", icon: <Settings className="w-4 h-4" /> }
  ];

  const togglePreset = (presetId: string) => {
    if (presetId === "none") {
      setSelectedPresets(["none"]);
      setPreferences("No special requirements");
    } else {
      setSelectedPresets(prev => {
        const filtered = prev.filter(id => id !== "none");
        return filtered.includes(presetId) 
          ? filtered.filter(id => id !== presetId)
          : [...filtered, presetId];
      });
    }
  };

  const handleSubmit = () => {
    const finalPreferences = preferences.trim() || "No special requirements";
    onSubmit(finalPreferences);
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-2xl p-4 border border-border/40">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-5 h-5 text-teal-500" />
          <span className="font-medium text-sm text-foreground">Any special requirements?</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {presetOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => togglePreset(option.id)}
              className={`p-3 rounded-xl border transition-all duration-200 ${
                selectedPresets.includes(option.id) 
                  ? 'bg-teal-100 text-teal-600 border-teal-500/20' 
                  : 'bg-white/60 border-border/40 hover:bg-white hover:border-border/60'
              }`}
            >
              <div className="flex items-center gap-2">
                {option.icon}
                <span className="font-medium text-xs">{option.label}</span>
              </div>
            </button>
          ))}
        </div>

        {!selectedPresets.includes("none") && (
          <div className="mb-4">
            <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Please describe your requirements
            </label>
            <Textarea
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="e.g., Wheelchair accessible hotels, vegetarian meals, avoiding stairs..."
              className="bg-white/80 border-border/60 focus:border-teal-500 rounded-xl resize-none"
              rows={3}
            />
          </div>
        )}

        <Button 
          onClick={handleSubmit}
          className="w-full bg-teal-500 hover:bg-teal-600 rounded-xl"
        >
          {selectedPresets.includes("none") ? "Continue without requirements" : "Continue with preferences"}
        </Button>
      </div>

      <div className="bg-muted/30 rounded-xl p-3 border border-border/40">
        <p className="text-xs text-muted-foreground text-center">
          💡 We'll ensure all recommendations meet your specific needs
        </p>
      </div>
    </div>
  );
} 