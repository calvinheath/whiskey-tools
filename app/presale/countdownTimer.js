import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);
  const targetDate = new Date("September 20, 2023"); 

  useEffect(() => {
    // Update the countdown timer every second
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;
      
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  // If we're on the server or the timer hasn't started yet, show "Loading..."
  if (!timeLeft) return <p>Loading...</p>;

  return <p>{timeLeft} Left</p>;
}

export default CountdownTimer;
