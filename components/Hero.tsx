"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-agri-dark py-20 text-white md:py-32">
            {/* Background pattern equivalent - purely CSS for now to avoid image deps */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#ECF39E_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {t.hero.title} <span className="text-agri-accent">{t.hero.titleAccent}</span>
                    </h1>
                    <p className="mt-6 text-lg text-agri-lines sm:text-xl text-gray-200">
                        {t.hero.subtitle}
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                        <Link
                            href="/select-crop"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-agri-accent px-8 text-sm font-medium text-agri-dark shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            {t.hero.cta}
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-agri-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            <PlayCircle className="mr-2 h-4 w-4" /> {t.hero.watchVideo}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
