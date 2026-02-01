"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-agri-main/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center px-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold md:text-2xl text-agri-dark">
                        AgriFlux CropCare
                    </span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
                    <Link href="#" className="transition-colors hover:text-agri-main">
                        {t.nav.howItWorks}
                    </Link>
                    <Link href="/select-crop" className="transition-colors hover:text-agri-main">
                        {t.nav.guidance}
                    </Link>
                    <Link href="/support" className="transition-colors hover:text-agri-main">
                        {t.nav.support}
                    </Link>
                    <Link href="/upload" className="transition-colors hover:text-agri-main">
                        {t.nav.verify}
                    </Link>
                    <LanguageSelector />
                    <Link href="/select-crop" className="bg-agri-main text-white px-4 py-2 rounded-md hover:bg-agri-dark transition-colors">
                        {t.nav.getStarted}
                    </Link>
                </nav>
                <div className="flex items-center ml-auto md:hidden space-x-4">
                    <LanguageSelector />
                    <button
                        className="p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-agri-dark" />
                        ) : (
                            <Menu className="h-6 w-6 text-agri-dark" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white shadow-lg absolute w-full left-0 px-4 py-6 flex flex-col space-y-4">
                    <Link
                        href="#"
                        className="text-lg font-medium text-gray-700 hover:text-agri-main"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t.nav.howItWorks}
                    </Link>
                    <Link
                        href="/select-crop"
                        className="text-lg font-medium text-gray-700 hover:text-agri-main"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t.nav.guidance}
                    </Link>
                    <Link
                        href="/support"
                        className="text-lg font-medium text-gray-700 hover:text-agri-main"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t.nav.support}
                    </Link>
                    <Link
                        href="/upload"
                        className="text-lg font-medium text-gray-700 hover:text-agri-main"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t.nav.verify}
                    </Link>
                    <Link
                        href="/select-crop"
                        className="bg-agri-main text-white text-center px-4 py-3 rounded-md font-bold hover:bg-agri-dark transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t.nav.getStarted}
                    </Link>
                </div>
            )}
        </header>
    );
}
