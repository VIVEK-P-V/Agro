"use client";

import { Globe } from "lucide-react";
import { useState } from "react";

export default function LanguageSelector() {
    const [lang, setLang] = useState("EN");

    return (
        <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium hover:text-agri-main transition-colors">
                <Globe className="h-4 w-4" />
                <span>{lang}</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-100 hidden group-hover:block p-1 z-50">
                <button
                    onClick={() => setLang("EN")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-agri-light/20 rounded-sm"
                >
                    English
                </button>
                <button
                    onClick={() => setLang("HI")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-agri-light/20 rounded-sm"
                >
                    Hindi (हिंदी)
                </button>
            </div>
        </div>
    );
}
