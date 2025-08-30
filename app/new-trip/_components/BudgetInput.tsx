"use client";

import { Button } from "@/components/ui/button";
import { DollarSign, Wallet, Crown } from "lucide-react";
import React, { useState } from "react";

interface BudgetInputProps {
  onSubmit: (budget: string) => void;
}

export default function BudgetInput({ onSubmit }: BudgetInputProps) {
  const [selectedBudget, setSelectedBudget] = useState("");

  const budgetOptions = [
    { 
      id: "low", 
      label: "Budget-Friendly", 
      range: "$500 - $1,500", 
      description: "Great value experiences",
      icon: <Wallet className="w-6 h-6" />,
      color: "from-green-500/10 to-emerald-600/10 border-green-500/20 text-green-600"
    },
    { 
      id: "medium", 
      label: "Comfortable", 
      range: "$1,500 - $5,000", 
      description: "Balance of comfort & value",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-blue-500/10 to-blue-600/10 border-blue-500/20 text-blue-600"
    },
    { 
      id: "high", 
      label: "Luxury", 
      range: "$5,000+", 
      description: "Premium experiences",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-500/10 to-purple-600/10 border-purple-500/20 text-purple-600"
    }
  ];

  const handleSubmit = () => {
    if (selectedBudget) {
      onSubmit(selectedBudget);
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-green-500/5 to-purple-500/5 rounded-2xl p-4 border border-border/40">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-green-600" />
          <span className="font-medium text-sm text-foreground">What's your budget range?</span>
        </div>
        
        <div className="space-y-3 mb-4">
          {budgetOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedBudget(option.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedBudget === option.id 
                  ? `bg-gradient-to-br ${option.color}` 
                  : 'bg-white/60 border-border/40 hover:bg-white hover:border-border/60'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`${selectedBudget === option.id ? option.color.split(' ')[3] : 'text-muted-foreground'}`}>
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-foreground">{option.label}</p>
                    <p className="font-bold text-sm text-foreground">{option.range}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={!selectedBudget}
          className="w-full bg-green-600 hover:bg-green-700 rounded-xl"
        >
          Continue with {selectedBudget ? budgetOptions.find(b => b.id === selectedBudget)?.label : "budget"}
        </Button>
      </div>

      <div className="bg-muted/30 rounded-xl p-3 border border-border/40">
        <p className="text-xs text-muted-foreground text-center">
          💡 Budget includes accommodation, activities, and meals. Flights are calculated separately.
        </p>
      </div>
    </div>
  );
} 