
import React from 'react';

export const ClippersLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2dd4bf', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="40"
            fontWeight="bold"
            fill="url(#logoGradient)"
            fontFamily="Inter, sans-serif"
        >
            Clippers
        </text>
    </svg>
);
