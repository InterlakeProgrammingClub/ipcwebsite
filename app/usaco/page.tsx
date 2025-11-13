"use client";

import Link from "next/link";
import { easeIn, motion } from "framer-motion";
import stats from "../../data/stats.json";

export default function USACO() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                easeIn:0.5
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
                easeIn:0.5

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
                easeIn:0.5

            },
        },
    };

    return (
        <div className="min-h-screen bg-shark-900">
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="max-w-4xl"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-block mb-4 px-3 py-1 bg-shark-800 border border-shark-700 text-sunglo-400 text-sm font-mono"
                            >
                                {"// USACO Training"}
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-alto-50 mb-6 leading-tight text-balance"
                            >
                                Master <span className="text-sunglo-500">USACO</span> Competitions
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
                                    className="inline-flex items-center justify-center px-8 py-4 bg-sunglo-500 text-shark-900 font-semibold hover:bg-sunglo-400 transition-colors"
                                >
                                    Join Training
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-shark-800 text-alto-50 font-semibold border border-shark-700 hover:border-sunglo-500 transition-colors"
                                >
                                    View Resources
                                </Link>
                            </motion.div>
                        </motion.div>
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
                                    className="text-center lg:text-left"
                                >
                                    <div className="text-4xl sm:text-5xl font-bold text-sunglo-500 mb-2">
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