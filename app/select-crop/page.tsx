"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CROPS } from "@/lib/data";
import { Sprout, Ruler } from "lucide-react";

export default function SelectCropPage() {
    const router = useRouter();
    const [selectedCrop, setSelectedCrop] = useState("");
    const [landSize, setLandSize] = useState("");
    const [unit, setUnit] = useState("acre");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedCrop && landSize) {
            router.push(`/guidance?crop=${selectedCrop}&size=${landSize}&unit=${unit}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8 border border-agri-main/10">
                <div className="text-center mb-8">
                    <div className="h-12 w-12 bg-agri-main/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sprout className="h-6 w-6 text-agri-main" />
                    </div>
                    <h1 className="text-2xl font-bold text-agri-dark">Start Your Crop Cycle</h1>
                    <p className="text-gray-500 mt-2">Select your crop and land details to get customized guidance.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Crop</label>
                        <div className="grid grid-cols-2 gap-4">
                            {CROPS.map((crop) => (
                                <button
                                    key={crop.id}
                                    type="button"
                                    onClick={() => setSelectedCrop(crop.id)}
                                    className={`p-4 rounded-lg border text-center transition-all ${selectedCrop === crop.id
                                            ? "border-agri-main bg-agri-main/5 text-agri-dark ring-1 ring-agri-main"
                                            : "border-gray-200 hover:border-agri-main/50"
                                        }`}
                                >
                                    <div className="text-2xl mb-2">{crop.image}</div>
                                    <div className="font-medium">{crop.name}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Land Size</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Ruler className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="number"
                                    placeholder="e.g. 2.5"
                                    value={landSize}
                                    onChange={(e) => setLandSize(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agri-main focus:border-transparent outline-none"
                                    required
                                    min="0.1"
                                    step="0.1"
                                />
                            </div>
                            <select
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agri-main outline-none bg-white"
                            >
                                <option value="acre">Acre</option>
                                <option value="hectare">Hectare</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!selectedCrop || !landSize}
                        className="w-full bg-agri-main text-white py-3 rounded-md font-bold hover:bg-agri-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Get Guidance
                    </button>
                </form>
            </div>
        </div>
    );
}
