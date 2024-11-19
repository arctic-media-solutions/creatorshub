import { Head, Link } from '@inertiajs/react';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

// Mock Data
const featuredCreators = [
    {
        id: 1,
        name: "Alex Rivers",
        handle: "@alexrivers",
        followers: "1.2M",
        category: "Gaming",
        description: "Professional Valorant player and content creator",
        verified: true,
    },
    {
        id: 2,
        name: "Sarah Chen",
        handle: "@sarahcreates",
        followers: "850K",
        category: "Art & Design",
        description: "Digital artist and Twitch creative streamer",
        verified: true,
    },
    {
        id: 3,
        name: "Marcus Wright",
        handle: "@marcusgaming",
        followers: "2.1M",
        category: "Gaming",
        description: "Minecraft builder and storyteller",
        verified: true,
    }
];

const stats = [
    { id: 1, name: 'Active Creators', value: '150,000+', icon: Users },
    { id: 2, name: 'Monthly Tips', value: '$2.5M+', icon: DollarSign },
    { id: 3, name: 'Creator Growth', value: '45%', icon: TrendingUp },
    { id: 4, name: 'Success Rate', value: '94%', icon: Award },
];

export default function Welcome({ auth }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <Head title="Welcome to CreatorsHub" />

            {/* Main Container */}
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-500">
                {/* Navigation */}
                <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
                                >
                                    CreatorsHub
                                </motion.div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleTheme}
                                    className="rounded-full"
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.div
                                            key={theme}
                                            initial={{ y: -20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 20, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                        </motion.div>
                                    </AnimatePresence>
                                </Button>

                                {auth.user ? (
                                    <Link href={route('dashboard')}>
                                        <Button
                                            variant="default"
                                            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                                        >
                                            Dashboard
                                        </Button>
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Link href={route('login')}>
                                            <Button
                                                variant="ghost"
                                                className="text-gray-700 dark:text-gray-300"
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                        <Link href={route('register')}>
                                            <Button
                                                variant="default"
                                                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                                            >
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-8">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                                    Empower Your Creative Journey
                                </span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-12">
                                Join the next generation of creators, build your community, and monetize your passion.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link href={route('register')}>
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                                    >
                                        Start Creating
                                    </Button>
                                </Link>
                                <Button size="lg" variant="outline">
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-white dark:bg-gray-800/50 backdrop-blur-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-6 shadow-lg"
                                >
                                    <dt className="flex items-center gap-2 text-base font-semibold text-gray-600 dark:text-gray-300">
                                        <stat.icon className="h-5 w-5 text-purple-500" />
                                        {stat.name}
                                    </dt>
                                    <dd className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                                        {stat.value}
                                    </dd>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Creators */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            Featured Creators
                        </h2>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredCreators.map((creator, index) => (
                                <motion.div
                                    key={creator.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <PlaceholderImage
                                            width={64}
                                            height={64}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {creator.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {creator.handle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                                                {creator.category}
                                            </span>
                                            <span>{creator.followers} followers</span>
                                        </div>
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                                            {creator.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <Button variant="ghost" className="text-purple-600 dark:text-purple-400">
                                            View Profile →
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-500">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-purple-100 mb-8">
                            Join thousands of creators who are building their future on CreatorsHub.
                        </p>
                        <Link href={route('register')}>
                            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                                Get Started For Free
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-gray-600 dark:text-gray-400">
                            <p>© 2024 CreatorsHub. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
