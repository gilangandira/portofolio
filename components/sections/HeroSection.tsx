"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

// Reusable Social Icon Component
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
    >
        <Icon size={20} />
    </a>
);

export function HeroSection() {
    return (
        <section
            id="home"
            className="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-2">
                        Hello,
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        I Am Gilang Andira P
                    </h1>
                    <div className="flex flex-wrap gap-2 text-sm md:text-base text-gray-400 mb-6 font-medium">
                        <span>Front End Developer</span>
                        <span className="text-orange-500">||</span>
                        <span>IT Operations Specialist</span>

                    </div>
                    <p className="text-gray-400 mb-8 max-w-lg">
                        5 Years Experienced <span className="text-orange-500 font-semibold">As Networks and Operations Related </span>
                    </p>

                    <a
                        href="https://wa.me/6285156970047"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-orange-500/20 mb-10 group"
                    >
                        Let's Talk
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <SocialIcon href="https://www.linkedin.com/in/gilang-andira-pratama-802a691a5/" icon={Linkedin} />
                            <SocialIcon href="#" icon={Github} />
                            <SocialIcon href="#" icon={Instagram} />
                        </div>

                        <a href="/CV.pdf" download className="flex items-center gap-2 text-sm text-orange-500 font-semibold hover:underline">
                            Download <span className="text-white">Curriculum Vitae</span>
                        </a>
                    </div>
                </motion.div>

                {/* Image/Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Yellow Circle Background */}
                        <div className="absolute inset-0 rounded-full border-[6px] border-orange-500/80 transform translate-x-4 translate-y-2"></div>
                        <div className="absolute inset-0 rounded-full bg-white overflow-hidden border-4 border-slate-900 shadow-2xl">
                            <Image
                                src="/profile-photo.png"
                                alt="Gilang Andira Pratama"
                                fill
                                className="object-contain scale-110 translate-y-2"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
