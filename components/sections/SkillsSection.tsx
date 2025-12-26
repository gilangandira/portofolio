"use client";

import { motion } from "framer-motion";
import { PenTool, Code, Layout } from "lucide-react";
import Image from "next/image";

const SkillIcon = ({ label, icon }: { label: string; icon: string }) => (
    <div className="flex flex-col items-center gap-2 group">
        <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200 p-3">
            <Image
                src={icon}
                alt={label}
                width={40}
                height={40}
                className="w-full h-full object-contain"
            />
        </div>
        <span className="text-sm text-gray-400 font-medium">{label}</span>
    </div>
);

const skills = [
    { name: "Flutter", icon: "/icon/flutter-icon.svg" },
    { name: "Git", icon: "/icon/git-icon.svg" },
    { name: "Laravel", icon: "/icon/laravel-icon.svg" },
    { name: "Linux Mint", icon: "/icon/linux-mint.svg" },
    { name: "Mikrōtik", icon: "/icon/mikrotik.svg" },
    { name: "Next.js", icon: "/icon/nextjs-icon.svg" },
    { name: "Ubiquiti", icon: "/icon/ubiquity.svg" },
];

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors group h-full">
        <div className="mb-4 text-orange-500 group-hover:text-white transition-colors">
            <Icon size={40} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white relative inline-block pb-2"
                    >
                        My Skills
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full"></span>
                    </motion.h2>
                </div>

                {/* Icons Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20"
                >
                    {skills.map((skill) => (
                        <SkillIcon key={skill.name} label={skill.name} icon={skill.icon} />
                    ))}
                </motion.div>

                {/* Services / Roles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <ServiceCard
                            icon={PenTool}
                            title="Network Technician"
                            description="5 Years as Network Technician in PT.Misqot Sejahtera Indonesia which I have extensive experience in technical support, troubleshooting, and solve IT issues."
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <ServiceCard
                            icon={Layout}
                            title="Front End Developer"
                            description="Freelancer Make Mobile App and Web App using Flutter and NextJS."
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <ServiceCard
                            icon={Code}
                            title="IT Operation Specialist"
                            description="Having Strong Experience in IT Operation and Network Management which I have extensive experience in technical support, troubleshooting, and solve IT issues."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
