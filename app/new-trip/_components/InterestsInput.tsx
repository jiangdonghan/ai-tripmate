"use client";

import { Button } from "@/components/ui/button";
import { Heart, Mountain, Camera, Utensils, Music, Waves, TreePine, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

interface InterestsInputProps {
  onSubmit: (interests: string[]) => void;
}

export default function InterestsInput({ onSubmit }: InterestsInputProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interestOptions = [
    { id: "adventure", label: "Adventure", icon: <Mountain className="w-5 h-5" />, color: "bg-red-100 text-red-600 border-red-500/20" },
    { id: "sightseeing", label: "Sightseeing", icon: <Camera className="w-5 h-5" />, color: "bg-blue-100 text-blue-600 border-blue-500/20" },
    { id: "cultural", label: "Cultural", icon: <Heart className="w-5 h-5" />, color: "bg-purple-100 text-purple-600 border-purple-500/20" },
    { id: "food", label: "Food & Drink", icon: <Utensils className="w-5 h-5" />, color: "bg-orange-100 text-orange-600 border-orange-500/20" },
    { id: "nightlife", label: "Nightlife", icon: <Music className="w-5 h-5" />, color: "bg-pink-100 text-pink-600 border-pink-500/20" },
    { id: "relaxation", label: "Relaxation", icon: <Waves className="w-5 h-5" />, color: "bg-teal-100 text-teal-600 border-teal-500/20" },
    { id: "nature", label: "Nature", icon: <TreePine className="w-5 h-5" />, color: "bg-green-100 text-green-600 border-green-500/20" },
    { id: "shopping", label: "Shopping", icon: <ShoppingBag className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-600 border-yellow-500/20" }
  ];

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = () => {
    if (selectedInterests.length > 0) {
      onSubmit(selectedInterests);
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl p-4 border border-border/40">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-purple-500" />
          <span className="font-medium text-sm text-foreground">What interests you most?</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {interestOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleInterest(option.id)}
              className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                selectedInterests.includes(option.id) 
                  ? `${option.color} border-current` 
                  : 'bg-white/60 border-border/40 hover:bg-white hover:border-border/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`${selectedInterests.includes(option.id) ? 'text-current' : 'text-muted-foreground'}`}>
                  {option.icon}
                </div>
                <span className="font-medium text-sm text-foreground">{option.label}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">
            Selected: {selectedInterests.length > 0 ? selectedInterests.join(", ") : "None"}
          </p>
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={selectedInterests.length === 0}
          className="w-full bg-purple-500 hover:bg-purple-600 rounded-xl"
        >
          Continue with {selectedInterests.length} interest{selectedInterests.length !== 1 ? 's' : ''}
        </Button>
      </div>

      <div className="bg-muted/30 rounded-xl p-3 border border-border/40">
        <p className="text-xs text-muted-foreground text-center">
          💡 Select multiple interests to get personalized recommendations
        </p>
      </div>
    </div>
  );
} 