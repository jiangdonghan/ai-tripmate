"use client";

import React, { useState } from "react";
import ChatBot from "./_components/ChatBot";
import ItineraryDisplay from "./_components/ItineraryDisplay";

function NewTrip() {
  const [itineraryData, setItineraryData] = useState<any>(null);
  const [isItineraryLoading, setIsItineraryLoading] = useState(false);

  const handleItineraryReady = (data: any) => {
    setItineraryData(data);
    setIsItineraryLoading(false);
  };

  const handleLoadingStateChange = (isLoading: boolean) => {
    setIsItineraryLoading(isLoading);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gradient-to-br from-background via-background to-muted/30 mt-16">
      {/* Left Side - Chat Interface */}
      <ChatBot 
        onItineraryReady={handleItineraryReady}
        onLoadingStateChange={handleLoadingStateChange}
      />

      {/* Right Side - Dynamic Itinerary Display */}
      <ItineraryDisplay 
        isLoading={isItineraryLoading}
        itineraryData={itineraryData}
      />
    </div>
  );
}

export default NewTrip;