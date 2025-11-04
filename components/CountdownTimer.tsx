
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
    const [timeLeft, setTimeLeft] = useState(initialSeconds);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = () => {
        const days = Math.floor(timeLeft / (60 * 60 * 24));
        const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
        const seconds = timeLeft % 60;

        return {
            days: String(days).padStart(2, '0'),
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
        };
    };

    const { days, hours, minutes, seconds } = formatTime();

    return (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center p-2 z-50 shadow-lg">
            <span className="font-bold tracking-wider text-sm sm:text-base">
                LA GRABACIÓN SE ELIMINARÁ EN: 
                <span className="inline-block bg-white text-red-600 rounded px-2 py-1 ml-2 tabular-nums">
                    {days}:{hours}:{minutes}:{seconds}
                </span>
            </span>
        </div>
    );
};

export default CountdownTimer;
