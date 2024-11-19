import React, { useMemo } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

const backgroundImages = [
    'https://cdn.pixabay.com/photo/2021/02/03/19/16/gamer-5979004_1280.jpg',
    'https://media.istockphoto.com/id/1218726699/photo/the-gamer-with-headphones-sitting-and-playing-video-games-in-the-neon-room.jpg?s=2048x2048&w=is&k=20&c=199CnO0gfnUjElZ04L8f84KncfPjsRE67FbJuFmjvyw=',
    'https://media.istockphoto.com/id/1785843235/photo/female-gamer-asian-ethnicity-playing-fps-video-game-on-computer.jpg?s=2048x2048&w=is&k=20&c=4mXwHoOtD_Ez6_skd5Us5NMHIYis3iD1iTXMxhi8-uU=',
    'https://media.istockphoto.com/id/1840473498/photo/young-black-man-playing-video-games-on-pc.jpg?s=2048x2048&w=is&k=20&c=BwlYLOAgbpekcX2MoyReLgvdZWU4NqFlhmn_j1G3aMw=',
];

export default function GuestLayout({ children }) {
    const randomImage = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        return backgroundImages[randomIndex];
    }, []);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-100 dark:bg-gray-900 lg:w-1/2">
                <div className="mx-auto w-full max-w-lg">
                    <div className="flex justify-center lg:justify-start">
                        <Link href="/">
                            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                        </Link>
                    </div>
                    <div className="mt-8">
                        <div className="bg-white dark:bg-gray-800 px-6 py-8 shadow-md rounded-lg">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={randomImage}
                    alt="Auth background"
                />
            </div>
        </div>
    );
}
