"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCities() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destinations
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ destination }: { destination: string }) => {
  const contentData = {
    "Tokyo, Japan": {
      title: "Discover Tokyo's hidden gems",
      description:
        "From traditional temples to futuristic districts, let AI guide you through Tokyo's unique blend of old and new. Experience authentic ramen, peaceful gardens, and vibrant nightlife.",
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop",
    },
    "Paris, France": {
      title: "Experience Parisian elegance",
      description:
        "Let AI craft your perfect Paris itinerary with iconic landmarks, charming cafes, and hidden courtyards. From the Eiffel Tower to Montmartre, discover the magic of the City of Light.",
      image:
        "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "New York, USA": {
      title: "Explore the Big Apple",
      description:
        "AI-powered NYC adventures from Times Square to Central Park. Discover world-class museums, diverse neighborhoods, and the city's legendary food scene.",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    },
    "Bali, Indonesia": {
      title: "Tropical paradise awaits",
      description:
        "From pristine beaches to spiritual temples, let AI plan your Bali escape. Experience rice terraces, traditional dance, and world-class surfing spots.",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop",
    },
    "Santorini, Greece": {
      title: "Mediterranean dreams",
      description:
        "AI-curated Santorini experiences with stunning sunsets, white-washed buildings, and crystal-clear waters. Discover the perfect blend of romance and adventure.",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop",
    },
    "Queenstown, NZ": {
      title: "Adventure capital calling",
      description:
        "Thrilling Queenstown adventures planned by AI. From bungee jumping to wine tours, experience New Zealand's most exciting destination with personalized itineraries.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    },
  };

  const content =
    contentData[destination as keyof typeof contentData] ||
    contentData["Tokyo, Japan"];

  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="relative overflow-hidden bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {content.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {content.description}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    AI-Powered Planning
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Personalized Itineraries
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative group">
                  <img
                    src={content.image}
                    alt={`${destination} travel planning`}
                    className="w-64 h-48 md:w-80 md:h-56 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Tokyo, Japan",
    title: "Modern Culture & Tradition",
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop",
    content: <DummyContent destination="Tokyo, Japan" />,
  },
  {
    category: "Paris, France",
    title: "City of Lights & Romance",
    src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent destination="Paris, France" />,
  },
  {
    category: "New York, USA",
    title: "The City That Never Sleeps",
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    content: <DummyContent destination="New York, USA" />,
  },
  {
    category: "Queenstown, NZ",
    title: "Adventure Capital",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    content: <DummyContent destination="Queenstown, NZ" />,
  },
  {
    category: "Bali, Indonesia",
    title: "Tropical Paradise & Culture",
    src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop",
    content: <DummyContent destination="Bali, Indonesia" />,
  },
  {
    category: "Santorini, Greece",
    title: "Mediterranean Magic",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop",
    content: <DummyContent destination="Santorini, Greece" />,
  },
];
