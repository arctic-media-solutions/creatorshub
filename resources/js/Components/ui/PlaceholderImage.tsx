import React from 'react';

interface PlaceholderImageProps {
    width: number;
    height: number;
    className?: string;
}

export function PlaceholderImage({ width, height, className = '' }: PlaceholderImageProps) {
    return (
        <div
            className={`bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full ${className}`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <svg
                className="w-full h-full text-gray-400 dark:text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </div>
    );
}
