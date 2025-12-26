"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-8"
                >
                    About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <blockquote className="text-orange-500 italic mb-6 font-medium text-lg">
                        "Technology is only as good as the hands that manage it."
                    </blockquote>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        Computer Science graduate from Esa Unggul University with a strong technical foundation in programming, networking, and hardware. As an IT Operation Specialist, I have extensive experience in technical support, troubleshooting, and enterprise system management. <span className="text-white font-semibold">I am proficient</span> in using GLPI for ticket management and possess specialized skills in Audio/Video configuration for corporate events. I am a detail-oriented professional known for rapid problem-solving and adaptability in dynamic operational environments.                   </p>
                </motion.div>
            </div>
        </section>
    );
}
