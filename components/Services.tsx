"use client";

import { Sprout, ShieldCheck, BarChart3, Droplets } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    const icons = [ShieldCheck, Sprout, Droplets, BarChart3];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-agri-dark sm:text-4xl">
                        {t.services.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        {t.services.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.services.items.map((service, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="h-12 w-12 bg-agri-light/20 rounded-lg flex items-center justify-center mb-6">
                                    <Icon className="h-6 w-6 text-agri-dark" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
