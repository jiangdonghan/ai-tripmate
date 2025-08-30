"use client";

import { Button } from "@/components/ui/button";
import { Users, User, Heart, UserPlus } from "lucide-react";
import React, { useState } from "react";

interface GroupSizeInputProps {
  onSubmit: (groupSize: string) => void;
}

export default function GroupSizeInput({ onSubmit }: GroupSizeInputProps) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [customNumber, setCustomNumber] = useState("");

  const groupOptions = [
    { 
      id: "solo", 
      label: "Solo", 
      description: "Just me", 
      icon: <User className="w-6 h-6" />,
      color: "from-emerald-500/10 to-emerald-600/10 border-emerald-500/20"
    },
    { 
      id: "couple", 
      label: "Couple", 
      description: "2 people", 
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500/10 to-rose-600/10 border-pink-500/20"
    },
    { 
      id: "family", 
      label: "Family", 
      description: "3-6 people", 
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500/10 to-blue-600/10 border-blue-500/20"
    },
    { 
      id: "friends", 
      label: "Friends", 
      description: "Group trip", 
      icon: <UserPlus className="w-6 h-6" />,
      color: "from-purple-500/10 to-purple-600/10 border-purple-500/20"
    }
  ];

  const handleSubmit = () => {
    let result = selectedGroup;
    if ((selectedGroup === "family" || selectedGroup === "friends") && customNumber) {
      result = `${selectedGroup} (${customNumber} people)`;
    }
    if (result) {
      onSubmit(result);
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl p-4 border border-border/40">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-blue-500" />
          <span className="font-medium text-sm text-foreground">How many travelers?</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {groupOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedGroup(option.id)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedGroup === option.id 
                  ? `bg-gradient-to-br ${option.color} border-current` 
                  : 'bg-white/60 border-border/40 hover:bg-white hover:border-border/60'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`${selectedGroup === option.id ? 'text-current' : 'text-muted-foreground'}`}>
                  {option.icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">{option.label}</p>
                  <p className="text-xs text-muted-foreground">{option.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {(selectedGroup === "family" || selectedGroup === "friends") && (
          <div className="mb-4">
            <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              How many people exactly?
            </label>
            <input
              type="number"
              value={customNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomNumber(e.target.value)}
              placeholder="Enter number of people"
              min="1"
              max="20"
              className="w-full px-3 py-2 bg-white/80 border border-border/60 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
            />
          </div>
        )}

        <Button 
          onClick={handleSubmit}
          disabled={!selectedGroup || ((selectedGroup === "family" || selectedGroup === "friends") && !customNumber)}
          className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl"
        >
          Continue with {selectedGroup || "selection"}
        </Button>
      </div>
    </div>
  );
} 