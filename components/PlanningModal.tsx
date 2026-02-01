"use client";

import { X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useEffect, useState } from "react";

interface PlanningModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PlanningModal({ isOpen, onClose }: PlanningModalProps) {
    const { t } = useLanguage();
    const [formUrl, setFormUrl] = useState("");

    useEffect(() => {
        // Load from env
        const url = process.env.GFORM;
        if (url) setFormUrl(url);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-agri-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🌱</span>
                    </div>

                    <h2 className="text-2xl font-bold text-agri-dark mb-2">
                        {t.planning.title}
                    </h2>

                    <p className="text-gray-600 mb-8">
                        {t.planning.desc}
                    </p>

                    <div className="space-y-3">
                        <a
                            href={formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-3 px-4 bg-agri-main text-white font-semibold rounded-lg hover:bg-agri-dark transition-colors shadow-md hover:shadow-lg"
                        >
                            {t.planning.openForm}
                        </a>

                        <button
                            onClick={onClose}
                            className="block w-full py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            {t.planning.cancel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
