import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {SignInButton} from "@clerk/nextjs";

const menuOptions = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact us",
    href: "/contact",
  },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Image src="/logo.svg" alt="logo" width={24} height={24} />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TripMate AI
            </h2>
          </div>

          {/* Navigation - centered */}
          <nav className="hidden md:flex items-center gap-8">
            {menuOptions.map((option, index) => (
              <Link key={index} href={option.href} className="relative group">
                <span className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200">
                  {option.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            {/*<Link href="/sign-in">*/}
            {/*  <SignInButton mode={"modal"}>*/}
            {/*    <Button*/}
            {/*        variant="ghost"*/}
            {/*        className="hidden sm:inline-flex text-foreground/80 hover:text-foreground hover:bg-accent/10"*/}
            {/*    >*/}
            {/*      Sign In*/}
            {/*    </Button>*/}
            {/*  </SignInButton>*/}
            {/*</Link>*/}
            <SignInButton mode={"modal"}>

            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
            </SignInButton>

          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
