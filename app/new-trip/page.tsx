"use client";

import { MapPin, Calendar, Users, Plane, Hotel, Car, Clock, Star, ChevronRight } from "lucide-react";
import React from "react";
import ChatBot from "./_components/ChatBot";

function NewTrip() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-gradient-to-br from-background via-background to-muted/30 mt-16">
      {/* Left Side - Chat Interface */}
      <ChatBot />

      {/* Right Side - Premium Trip Itinerary */}
      <div className="w-1/2 flex flex-col bg-gradient-to-b from-muted/30 via-muted/20 to-muted/40 backdrop-blur-sm">
        {/* Premium Itinerary Header */}
        <div className="relative p-6 bg-white/80 backdrop-blur-sm border-b border-border/60" style={{ minHeight: '104px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Dream Itinerary
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>AI Curated</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/60 rounded-xl p-3 border border-border/40 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Route</span>
                </div>
                <p className="font-semibold text-sm text-foreground">Auckland → Queenstown</p>
              </div>
              
              <div className="bg-white/60 rounded-xl p-3 border border-border/40 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Duration</span>
                </div>
                <p className="font-semibold text-sm text-foreground">5 Days</p>
              </div>
              
              <div className="bg-white/60 rounded-xl p-3 border border-border/40 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Travelers</span>
                </div>
                <p className="font-semibold text-sm text-foreground">2 People</p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Itinerary Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Day 1 - Premium Card */}
            <div className="group relative bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Day 1</h3>
                      <p className="text-sm text-muted-foreground">Arrival & Orientation</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-primary/5 border border-primary/10">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Flight from Auckland</p>
                      <p className="text-xs text-muted-foreground mt-1">Morning arrival in Queenstown</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">9:00 AM - 11:30 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-teal-50/50 to-accent/5 border border-accent/10">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Hotel className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Hotel Check-in</p>
                      <p className="text-xs text-muted-foreground mt-1">Downtown Queenstown accommodation</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">2:00 PM onwards</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-emerald-50/50 to-emerald-500/5 border border-emerald-500/10">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">City Orientation</p>
                      <p className="text-xs text-muted-foreground mt-1">Walk around town center and waterfront</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">4:00 PM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 - Premium Card */}
            <div className="group relative bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/3 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Day 2</h3>
                      <p className="text-sm text-muted-foreground">Adventure Activities</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-blue-500/5 border border-blue-500/10">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Milford Sound Day Trip</p>
                      <p className="text-xs text-muted-foreground mt-1">Scenic drive and boat cruise through fiords</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Full day • 7:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-purple-50/50 to-purple-500/5 border border-purple-500/10">
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Evening Gondola</p>
                      <p className="text-xs text-muted-foreground mt-1">Skyline Queenstown for sunset views</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">6:00 PM - 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 - Premium Card */}
            <div className="group relative bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 to-yellow-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Day 3</h3>
                      <p className="text-sm text-muted-foreground">Wine & Culture</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-orange-50/50 to-orange-500/5 border border-orange-500/10">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <Car className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Central Otago Wine Tour</p>
                      <p className="text-xs text-muted-foreground mt-1">Visit premium wineries and vineyards</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">10:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-emerald-50/50 to-emerald-500/5 border border-emerald-500/10">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Arrowtown Historic Walk</p>
                      <p className="text-xs text-muted-foreground mt-1">Explore the charming gold mining town</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">6:00 PM - 7:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 4 - Premium Card */}
            <div className="group relative bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/3 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Day 4</h3>
                      <p className="text-sm text-muted-foreground">Thrill & Adventure</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-red-50/50 to-red-500/5 border border-red-500/10">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🪂</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Bungee Jumping Experience</p>
                      <p className="text-xs text-muted-foreground mt-1">Kawarau Bridge - World's first commercial bungy</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">10:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-blue-500/5 border border-blue-500/10">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">⛵</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Lake Wakatipu Cruise</p>
                      <p className="text-xs text-muted-foreground mt-1">Scenic boat tour on pristine alpine lake</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">2:00 PM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 5 - Premium Card */}
            <div className="group relative bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-primary rounded-2xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Day 5</h3>
                      <p className="text-sm text-muted-foreground">Farewell & Departure</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-emerald-50/50 to-emerald-500/5 border border-emerald-500/10">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🛍️</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Souvenir Shopping</p>
                      <p className="text-xs text-muted-foreground mt-1">Local markets and artisan shops</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">10:00 AM - 1:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-primary-50/50 to-primary/5 border border-primary/10">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">Return Flight to Auckland</p>
                      <p className="text-xs text-muted-foreground mt-1">Evening departure with amazing memories</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">6:00 PM - 7:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trip Summary Footer */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl border border-border/40">
            <div className="text-center">
              <h4 className="font-bold text-lg text-foreground mb-2">Your Adventure Awaits! ✈️</h4>
              <p className="text-sm text-muted-foreground">
                5 days of unforgettable experiences in New Zealand's adventure capital
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                <span>🏨 Accommodation included</span>
                <span>🚗 Transport arranged</span>
                <span>🎯 Activities booked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTrip;