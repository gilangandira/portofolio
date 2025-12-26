"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <footer id="contact" className="py-12 bg-slate-800 border-t border-slate-700">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
                        <p className="text-gray-400 mb-6">
                            Have a project in mind? Let's discuss how I can help you achieve your goals.
                        </p>
                        <a href="mailto:email@example.com" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors inline-block">
                            Contact Me
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end text-gray-400">
                        <div className="flex items-center gap-2">
                            <Mail size={18} className="text-orange-500" />
                            <span>gilangandy24@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={18} className="text-orange-500" />
                            <span>+62 851 5697 0047</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-orange-500" />
                            <span>Indonesia</span>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-slate-700 text-sm text-gray-500">
                    © {new Date().getFullYear()} Gilang Andira Pratama. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
