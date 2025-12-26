"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Placeholder projects
const projects = [
    {
        title: "Sales Management",
        category: "Full Stack Development",
        description: "A comprehensive dashboard for managing sales, customers, and financial data. Features include real-time analytics, dynamic installment calculations, and customer tracking. Built with Next.js and Laravel.",
        images: [
            "/projects/sales-management/dashboard.png",
            "/projects/sales-management/customers.png",
            "/projects/sales-management/payment-details.png",
            "/projects/sales-management/login.png"
        ],
        color: "bg-slate-900"
    },
    {
        title: "Peng Koi Sek Original",
        category: "Restaurant Profile & POS",
        description: "A complete solution featuring a restaurant profile website, stock management dashboard, and Point of Sale (POS) system. Designed for seamless restaurant operations and branding. Built with Next.js and Laravel.",
        images: [
            "/projects/peng-koi-sek/home.png",
            "/projects/peng-koi-sek/story.png",
            "/projects/peng-koi-sek/product.png",
            "/projects/peng-koi-sek/dashboard.png",
            "/projects/peng-koi-sek/pos.png",
            "/projects/peng-koi-sek/inventory.png",
            "/projects/peng-koi-sek/sales-transactions.png"
        ],
        color: "bg-slate-900"
    },
    {
        title: "Misqot Sejahtera Indonesia",
        category: "Mobile App Development",
        description: "A mobile application for field task management and customer data tracking. Features include offline mode, real-time synchronization, and asset management. Built with Flutter and Laravel.",
        images: [
            "/projects/misqot/login.png",
            "/projects/misqot/home.png",
            "/projects/misqot/task-detail.png",
            "/projects/misqot/asset-list.png",
            "/projects/misqot/customer-detail.png"
        ],
        color: "bg-slate-900"
    },
];

export function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-play for projects (slower rotation)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000); // More time to see images
        return () => clearInterval(timer);
    }, [currentIndex]);

    // Auto-play for images within the project
    useEffect(() => {
        setCurrentImageIndex(0); // Reset image index when project changes

        const currentProject = projects[currentIndex];
        if (!currentProject.images || currentProject.images.length <= 1) return;

        const imageTimer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % currentProject.images!.length);
        }, 3000); // Rotate images every 3 seconds

        return () => clearInterval(imageTimer);
    }, [currentIndex]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <section id="projects" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white relative inline-block pb-2"
                    >
                        My Projects
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full"></span>
                    </motion.h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Carousel Content */}
                    <div className="overflow-hidden relative h-80 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col md:flex-row h-full"
                            >
                                {/* Image Side */}
                                <div className={`w-full md:w-1/2 h-48 md:h-full ${projects[currentIndex].color} flex items-center justify-center relative overflow-hidden`}>
                                    <AnimatePresence mode="wait">
                                        {projects[currentIndex].images ? (
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="absolute inset-0 w-full h-full"
                                            >
                                                <Image
                                                    src={projects[currentIndex].images![currentImageIndex]}
                                                    alt={`${projects[currentIndex].title} screenshot`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {/* Image Dots/Indicator */}
                                                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                                                    {projects[currentIndex].images!.map((_, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`h-1 rounded-full transition-all ${idx === currentImageIndex ? "w-4 bg-white" : "w-1 bg-white/40"}`}
                                                        />
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <Folder size={64} className="text-white/50" />
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Text Side */}
                                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-slate-900">
                                    <div className="text-sm text-orange-500 font-medium mb-3 uppercase tracking-wider">
                                        {projects[currentIndex].category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {projects[currentIndex].title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {projects[currentIndex].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-2 bg-slate-700 hover:bg-orange-500 rounded-full text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-2 bg-slate-700 hover:bg-orange-500 rounded-full text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 gap-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "w-6 bg-orange-500" : "bg-slate-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
