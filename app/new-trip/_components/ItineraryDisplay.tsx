"use client";

import { MapPin, Calendar, Users, Plane, Hotel, Car, Clock, Star, ChevronRight } from "lucide-react";
import React from "react";

interface TripInfo {
  route: string;
  duration: string;
  travelers: string;
}

interface Activity {
  title: string;
  description: string;
  time: string;
  icon: string;
  type: 'flight' | 'hotel' | 'activity' | 'transport' | 'food';
}

interface DayPlan {
  day: number;
  theme: string;
  activities: Activity[];
}

interface ItineraryData {
  tripInfo: TripInfo;
  days: DayPlan[];
  summary: {
    title: string;
    description: string;
    features: string[];
  };
}

interface ItineraryDisplayProps {
  isLoading: boolean;
  itineraryData?: ItineraryData;
}

export default function ItineraryDisplay({ isLoading, itineraryData }: ItineraryDisplayProps) {
  const getActivityIcon = (type: string, icon?: string) => {
    if (icon) return <span className="text-lg">{icon}</span>;
    
    switch (type) {
      case 'flight': return <Plane className="w-4 h-4" />;
      case 'hotel': return <Hotel className="w-4 h-4" />;
      case 'transport': return <Car className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getActivityColor = (index: number) => {
    const colors = [
      'blue', 'teal', 'emerald', 'purple', 'orange', 'red', 'pink', 'indigo'
    ];
    return colors[index % colors.length];
  };

  const getDayColor = (day: number) => {
    const colors = [
      'from-primary to-primary/80',
      'from-accent to-accent/80', 
      'from-orange-500 to-yellow-500',
      'from-red-500 to-pink-500',
      'from-emerald-500 to-primary',
      'from-purple-500 to-blue-500',
      'from-pink-500 to-purple-500',
      'from-teal-500 to-emerald-500'
    ];
    return colors[(day - 1) % colors.length];
  };

  if (isLoading) {
    return (
      <div className="w-1/2 flex flex-col bg-gradient-to-b from-muted/30 via-muted/20 to-muted/40 backdrop-blur-sm">
        {/* Loading Header */}
        <div className="relative p-6 bg-white/80 backdrop-blur-sm border-b border-border/60" style={{ minHeight: '104px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Creating Your Itinerary
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <span>AI Working...</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/60 rounded-xl p-3 border border-border/40 shadow-sm animate-pulse">
                  <div className="h-4 bg-muted/40 rounded mb-2"></div>
                  <div className="h-3 bg-muted/30 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Loading Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {[1, 2, 3].map((day) => (
              <div key={day} className="bg-white rounded-2xl border border-border/40 shadow-sm p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-muted/40 rounded-2xl"></div>
                  <div>
                    <div className="h-5 bg-muted/40 rounded mb-1 w-16"></div>
                    <div className="h-3 bg-muted/30 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[1, 2].map((activity) => (
                    <div key={activity} className="flex items-start gap-4 p-3 rounded-xl bg-muted/20">
                      <div className="w-8 h-8 bg-muted/40 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-muted/40 rounded mb-2 w-3/4"></div>
                        <div className="h-3 bg-muted/30 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border/40">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-sm font-medium text-foreground">Crafting your perfect adventure...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!itineraryData) {
    return (
      <div className="w-1/2 flex flex-col bg-gradient-to-b from-muted/30 via-muted/20 to-muted/40 backdrop-blur-sm">
        <div className="relative p-6 bg-white/80 backdrop-blur-sm border-b border-border/60" style={{ minHeight: '104px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Dream Itinerary
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>AI Ready</span>
              </div>
            </div>
            
            <div className="text-center py-8">
              <p className="text-muted-foreground">Start chatting to create your personalized itinerary</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-12 h-12 text-primary" />
            </div>
            <p className="text-muted-foreground">Your itinerary will appear here once we gather your preferences</p>
          </div>
        </div>
      </div>
    );
  }

  return (
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
              <p className="font-semibold text-sm text-foreground">{itineraryData.tripInfo.route}</p>
            </div>
            
            <div className="bg-white/60 rounded-xl p-3 border border-border/40 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Duration</span>
              </div>
              <p className="font-semibold text-sm text-foreground">{itineraryData.tripInfo.duration}</p>
            </div>
            
            <div className="bg-white/60 rounded-xl p-3 border border-border/40 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Travelers</span>
              </div>
              <p className="font-semibold text-sm text-foreground">{itineraryData.tripInfo.travelers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Itinerary Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {itineraryData.days.map((dayPlan) => (
            <div key={dayPlan.day} className="group relative bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${getDayColor(dayPlan.day).replace('from-', 'from-').replace('to-', 'to-')}/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${getDayColor(dayPlan.day)} rounded-2xl flex items-center justify-center shadow-md`}>
                      <span className="text-white font-bold">{dayPlan.day}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Day {dayPlan.day}</h3>
                      <p className="text-sm text-muted-foreground">{dayPlan.theme}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="space-y-4">
                  {dayPlan.activities.map((activity, index) => {
                    const color = getActivityColor(index);
                    return (
                      <div key={index} className={`flex items-start gap-4 p-3 rounded-xl bg-gradient-to-r from-${color}-50/50 to-${color}-500/5 border border-${color}-500/10`}>
                        <div className={`w-8 h-8 bg-${color}-500/10 rounded-lg flex items-center justify-center`}>
                          {getActivityIcon(activity.type, activity.icon)}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-foreground">{activity.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trip Summary Footer */}
        {itineraryData.summary && (
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl border border-border/40">
            <div className="text-center">
              <h4 className="font-bold text-lg text-foreground mb-2">{itineraryData.summary.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {itineraryData.summary.description}
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
                {itineraryData.summary.features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 