import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);  // Component has mounted

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        const targetDate = new Date(now.getFullYear(), 8, 20);  // September 20th of current year

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    if (!isMounted) {
        return null; // Don't render anything on the server
    }

    if (!timeLeft) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s Left
        </div>
    );
}

export default CountdownTimer;
