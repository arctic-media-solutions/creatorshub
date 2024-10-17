import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-100 dark:bg-gray-900">
                <div className="mx-auto w-full max-w-sm lg:w-96">
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
                    src="https://cdn.pixabay.com/photo/2021/02/03/19/16/gamer-5979004_1280.jpg"
                    alt="Auth background"
                />
            </div>
        </div>
    );
}
