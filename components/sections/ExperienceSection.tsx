"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        role: "IT Operations Specialist",
        company: "PT. Panarub Industry",
        period: "July 2025 - September 2025",
        description: "Extensive experience in technical support, troubleshooting, and enterprise system management. Proficient in using GLPI for ticket management.",
    },
    {
        role: "Technical Support",
        company: "PT. Misqot Sejahtera Indonesia",
        period: "2019 - 2025",
        description: "Extensive experience in technical support, troubleshoot in Network equipment, install Network equipment, and manage Network infrastructure .",
    },
];

// Images for "My Experienced" carousel
const photos = [
    "/experience/tower-view.png",
    "/experience/server-maintenance.png",
    "/experience/climbing.jpg",
    "/experience/pc-hardware.jpg",
    "/experience/server-setup.png"
];

export function ExperienceSection() {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % photos.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="experience" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Photo Carousel */}
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPhoto}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 flex items-center justify-center bg-slate-800"
                        >
                            <Image
                                src={photos[currentPhoto]}
                                alt="My Experience"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Overlay or decorator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                </div>

                {/* Right Side: Experience Timeline */}
                <div>
                    <div className="mb-10">
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white relative inline-block pb-2"
                        >
                            My Experienced
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
                        </motion.h2>
                    </div>

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-6 border-l-2 border-slate-700"
                            >
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-slate-900"></div>

                                <div className="mb-1 text-sm text-orange-500 font-semibold">{exp.period}</div>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-base text-gray-400 mb-2">{exp.company}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
