"use client";

import { MapPin, Calendar, Users, Plane, Hotel, Car } from "lucide-react";
import React from "react";
import ChatBot from "./_components/ChatBot";

function NewTrip() {
  return (
    <div className="flex h-screen bg-background mt-16">
      {/* Left Side - Chat Interface */}
      <ChatBot />

      {/* Right Side - Trip Itinerary */}
      <div className="w-1/2 flex flex-col bg-muted/20">
        {/* Itinerary Header */}
        <div className="p-6 border-b border-border bg-card/50">
          <h2 className="font-semibold text-lg mb-2">Your Trip Itinerary</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Auckland → Queenstown</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>5 Days</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>2 Travelers</span>
            </div>
          </div>
        </div>

        {/* Itinerary Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">1</span>
                Day 1 - Arrival & Orientation
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 mt-1 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Flight from Auckland</p>
                    <p className="text-xs text-muted-foreground">Morning arrival in Queenstown</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hotel className="w-4 h-4 mt-1 text-accent" />
                  <div>
                    <p className="font-medium text-sm">Hotel Check-in</p>
                    <p className="text-xs text-muted-foreground">Downtown Queenstown accommodation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">City Orientation</p>
                    <p className="text-xs text-muted-foreground">Walk around town center and waterfront</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">2</span>
                Day 2 - Adventure Activities
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">Milford Sound Day Trip</p>
                    <p className="text-xs text-muted-foreground">Scenic drive and boat cruise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-purple-500" />
                  <div>
                    <p className="font-medium text-sm">Evening Gondola</p>
                    <p className="text-xs text-muted-foreground">Skyline Queenstown for sunset views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">3</span>
                Day 3 - Wine & Culture
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 mt-1 text-orange-500" />
                  <div>
                    <p className="font-medium text-sm">Central Otago Wine Tour</p>
                    <p className="text-xs text-muted-foreground">Visit local wineries and vineyards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">Arrowtown Visit</p>
                    <p className="text-xs text-muted-foreground">Historic gold mining town</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">4</span>
                Day 4 - Outdoor Adventure
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-red-500" />
                  <div>
                    <p className="font-medium text-sm">Bungee Jumping</p>
                    <p className="text-xs text-muted-foreground">Kawarau Bridge or Nevis Bungy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">Lake Wakatipu Cruise</p>
                    <p className="text-xs text-muted-foreground">Scenic boat tour on the lake</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">5</span>
                Day 5 - Departure
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">Final Shopping & Souvenirs</p>
                    <p className="text-xs text-muted-foreground">Visit local markets and shops</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 mt-1 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Flight back to Auckland</p>
                    <p className="text-xs text-muted-foreground">Evening departure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTrip;