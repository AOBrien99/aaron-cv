"use client";

import { motion } from "framer-motion";
import { workExperience } from "../data/workExperience";
import Link from "next/link";

export default function Timeline() {
    return (
        <section className="relative py-32 px-6 max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 w-1 bg-gray-800 h-full -translate-x-1/2" />

            <div className="space-y-32">
                {workExperience.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div className="w-full md:w-1/2 p-6">
                            <Link href={`/work/${item.id}`} className="block group">
                                <div className={`bg-zinc-900 p-6 rounded-2xl shadow-lg border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-zinc-900/50 ${item.type === 'education'
                                    ? 'border-blue-900/30 group-hover:border-blue-500'
                                    : 'border-zinc-800 group-hover:border-zinc-600'
                                    }`}>
                                    <h3 className={`text-xl font-semibold transition-colors ${item.type === 'education' ? 'text-blue-200 group-hover:text-blue-100' : 'group-hover:text-white'
                                        }`}>{item.title}</h3>
                                    <p className="text-sm text-zinc-500 font-medium">{item.company}</p>
                                    <p className="text-gray-400 mt-2 line-clamp-3">{item.shortDescription}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.skills?.slice(0, 3).map(skill => (
                                            <span key={skill} className="text-xs px-2 py-1 bg-zinc-800 rounded-md text-gray-400">
                                                {skill}
                                            </span>
                                        ))}
                                        {item.skills && item.skills.length > 3 && (
                                            <span className="text-xs px-2 py-1 bg-zinc-800 rounded-md text-gray-400">
                                                +{item.skills.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black z-10" />

                        <div className="hidden md:block w-1/2 text-center">
                            <span className="text-gray-500 text-lg font-mono">{item.year}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
