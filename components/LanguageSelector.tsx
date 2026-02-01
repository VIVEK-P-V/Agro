"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium hover:text-agri-main transition-colors">
                <Globe className="h-4 w-4" />
                <span>{language}</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-100 hidden group-hover:block p-1 z-50">
                <button
                    onClick={() => setLanguage("EN")}
                    className={`block w-full text-left px-4 py-2 text-sm rounded-sm ${language === "EN" ? "bg-agri-light/20 text-agri-main" : "text-gray-700 hover:bg-gray-50"}`}
                >
                    English
                </button>
                <button
                    onClick={() => setLanguage("HI")}
                    className={`block w-full text-left px-4 py-2 text-sm rounded-sm ${language === "HI" ? "bg-agri-light/20 text-agri-main" : "text-gray-700 hover:bg-gray-50"}`}
                >
                    Hindi (हिंदी)
                </button>
            </div>
        </div>
    );
}
