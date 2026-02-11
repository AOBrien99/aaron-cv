"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="py-32 text-center px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold"
            >
                Let’s Connect
            </motion.h2>

            <p className="mt-4 text-gray-400">
                your.email@example.com
            </p>
        </section>
    );
}