"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import stats from "../../data/stats.json";
import usacoImage from "../../public/content/usaco.jpg";

export default function USACO() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-shark-900 via-shark-800 to-shark-900">
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                            <motion.div
                                variants={itemVariants}
                                className="inline-block mb-4 px-3 py-1 bg-shark-800 border border-shark-700 text-sunglo-400 text-sm font-mono relative"
                            >
                                {"// USACO Training"}
                                <span
                                    className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-sunglo-500 via-sunglo-400 to-sunglo-500
                                    animate-[gradient-x_3s_ease-in-out_infinite]"
                                    style={{
                                        backgroundSize: "200% 200%",
                                    }}
                                ></span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance
                                bg-gradient-to-r from-sunglo-500 via-alto-50 to-sunglo-400 bg-clip-text text-transparent
                                animate-[gradient-x_5s_ease-in-out_infinite]"
                                style={{
                                    backgroundSize: "200% 200%",
                                }}
                            >
                                Master <span className="drop-shadow-lg">USACO</span> Competitions
                            </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-xl sm:text-2xl text-storm-dust-300 mb-8 leading-relaxed max-w-2xl text-pretty"
                                >
                                    Advance through Bronze, Silver, Gold, and Platinum divisions with expert guidance.
                                </motion.p>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-sunglo-500 text-shark-900 font-semibold hover:bg-sunglo-400 transition-colors rounded-lg shadow-md"
                                    >
                                        Join Training
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-shark-800 text-alto-50 font-semibold border border-shark-700 hover:border-sunglo-500 transition-colors rounded-lg shadow-md"
                                    >
                                        View Resources
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Image Section */}
                           <motion.div
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                className="bg-shark-800 border-4 border-shark-700 hover:border-sunglo-500 rounded-xl p-3 shadow-lg transition-colors"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="relative h-[400px] lg:h-[500px] mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src={usacoImage}
                                        alt="IPC members coding during USACO training"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="text-storm-dust-300 text-sm font-mono border-t border-shark-700 pt-3">
                                    <span className="text-sunglo-500">{"// "}</span>
                                    Locked in IPC members
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-shark-700">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {stats["usaco"].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={statVariants}
                                    whileHover={{
                                        scale: 1.08,
                                        boxShadow: "0 0 24px #e35d6a, 0 0 8px #fff",
                                        borderColor: "#e35d6a",
                                        transition: { duration: 0.2 }
                                    }}
                                    className="text-center lg:text-left p-4 bg-shark-800/50 border border-shark-700 rounded-lg transition-all"
                                >
                                    <div className="text-4xl sm:text-5xl font-bold text-sunglo-500 mb-2 drop-shadow">
                                        {stat.value}
                                    </div>
                                    <div className="text-alto-50 font-semibold mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-storm-dust-400">
                                        {stat.sublabel}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Add more sections: divisions, schedule, resources, success stories */}
            </main>
        </div>
    );
}