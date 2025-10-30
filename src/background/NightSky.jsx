import React, { useState } from "react";
import "./night.css";

export default function NightSky() {
  const [stars] = useState(() => {
    // Generate 170 random stars with random positions, sizes, and animation delays
    return Array.from({ length: 170 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  });

  const [shootingStars] = useState(() => {
    // Generate 5 shooting stars with random positions and animation delays
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 50,
      delay: Math.random() * 10 + 5,
      duration: Math.random() * 2 + 1,
    }));
  });

  return (
    <div className="night-sky">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="shooting-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
