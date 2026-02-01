"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gray-200">
                            {/* Placeholder for About Image */}
                            <div className="absolute inset-0 bg-agri-main/10 flex items-center justify-center text-agri-dark/50 font-bold text-xl">
                                [Company Image Placeholder]
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold tracking-tight text-agri-dark sm:text-4xl mb-6">
                            {t.about.title}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {t.about.p1}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t.about.p2}
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-3xl font-bold text-agri-main">500+</h4>
                                <p className="text-sm text-gray-500">{t.about.stat1}</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-agri-main">98%</h4>
                                <p className="text-sm text-gray-500">{t.about.stat2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
