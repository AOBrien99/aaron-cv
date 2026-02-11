"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            >
                Aaron O Brien
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-6 flex flex-col items-center gap-4"
            >
                <p className="text-lg text-gray-400 max-w-xl">
                    Technical Lead combining deep engineering expertise with product thinking to deliver scalable, customer-focused platforms.
                </p>
                <a
                    href="mailto:aaronobrien1212@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1"
                >
                    aaronobrien1212@gmail.com
                </a>
            </motion.div>
        </section>
    );
}