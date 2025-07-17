import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] sm:h-[91.5vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://plus.unsplash.com/premium_photo-1661882021629-2b0888d93c94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
          All About New Zealand
        </h1>
        <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
          Discover the land of the long white cloud with its stunning
          landscapes, rich culture, and endless adventures waiting for you.
        </p>
        <button className="bg-primary hover:bg-purple-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}