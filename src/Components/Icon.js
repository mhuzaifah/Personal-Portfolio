import React from 'react';
import { FiCheck } from 'react-icons/fi'; // Importing an icon from 'react-icons'

const GradientIcon = (icon) => {
    return (
        <>
            {}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop stopColor="#20e4fa" offset="22.6%" />
                        <stop stopColor="rgb(255, 180, 239)" offset="67.7%" />
                    </linearGradient>
                </defs>
            </svg>

            {}
            <icon style={{ stroke: "url(#gradient)" }} />
        </>
    );
};

export default GradientIcon;
