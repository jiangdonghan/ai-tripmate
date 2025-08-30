"use client";

import { CheckCircle, Sparkles, MapPin, Calendar } from "lucide-react";
import React, { useState, useEffect } from "react";

interface FinalStepProps {
  onComplete: () => void;
  isApiComplete?: boolean;
}

export default function FinalStep({ onComplete, isApiComplete = false }: FinalStepProps) {
  const [loadingStep, setLoadingStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);


  const loadingSteps = [
    { text: "Analyzing your preferences...", icon: "🧠" },
    { text: "Finding the best destinations...", icon: "🗺️" },
    { text: "Planning optimal routes...", icon: "🛣️" },
    { text: "Booking accommodations...", icon: "🏨" },
    { text: "Arranging activities...", icon: "🎯" },
    { text: "Finalizing your itinerary...", icon: "✨" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        } else {
          // Don't auto-complete, wait for API
          clearInterval(timer);
          return prev;
        }
      });
    }, 400); // Faster animation - 400ms per step

    return () => clearInterval(timer);
  }, []);

  // Complete when API is done
  useEffect(() => {
    if (isApiComplete && loadingStep >= loadingSteps.length - 1) {
      setIsCompleted(true);
      setTimeout(() => onComplete(), 500);
    }
  }, [isApiComplete, loadingStep, onComplete]);

  if (isCompleted) {
    return (
      <div className="mt-4 space-y-4">
        <div className="bg-gradient-to-r from-emerald-500/10 to-primary/10 rounded-2xl p-6 border border-emerald-500/20">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">🎉 Your Trip is Ready!</h3>
              <p className="text-sm text-muted-foreground">
                I've created a personalized itinerary just for you. Check out your custom travel plan on the right!
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-600 bg-emerald-50 rounded-full px-4 py-2">
              <Sparkles className="w-3 h-3" />
              <span>Itinerary generated successfully</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-border/40">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
            <Sparkles className="w-8 h-8 text-white animate-spin" />
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Creating Your Perfect Trip</h3>
            <p className="text-sm text-muted-foreground">
              Please wait while I craft your personalized itinerary...
            </p>
          </div>

          <div className="space-y-3">
            {loadingSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 ${
                  index <= loadingStep 
                    ? 'bg-white/80 border border-primary/20 shadow-sm' 
                    : 'bg-muted/20 border border-border/20'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  index < loadingStep 
                    ? 'bg-emerald-100 text-emerald-600' 
                    : index === loadingStep 
                    ? 'bg-primary/10 text-primary animate-pulse' 
                    : 'bg-muted/40 text-muted-foreground'
                }`}>
                  {index < loadingStep ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <span>{step.icon}</span>
                  )}
                </div>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  index <= loadingStep ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-xs text-muted-foreground ml-2">
              Step {loadingStep + 1} of {loadingSteps.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 