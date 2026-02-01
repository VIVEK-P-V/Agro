"use client";

import { useSearchParams } from "next/navigation";
import { CROPS, getCropStages } from "@/lib/data";
import { AlertTriangle, Droplets, Leaf } from "lucide-react";
import Link from "next/link";
import { Suspense } from 'react';

function GuidanceContent() {
    const searchParams = useSearchParams();
    const cropId = searchParams.get("crop");
    const size = parseFloat(searchParams.get("size") || "1");
    const unit = searchParams.get("unit") || "acre";

    const crop = CROPS.find((c) => c.id === cropId);

    // Conversion factor: 1 Hectare = 2.47 Acres
    const sizeInAcres = unit === "hectare" ? size * 2.471 : size;

    if (!crop) {
        return <div className="p-8 text-center">Crop not found</div>;
    }

    const stages = crop.stages || getCropStages(crop.id);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-agri-dark text-white py-12 px-4">
                <div className="container mx-auto">
                    <Link href="/select-crop" className="text-agri-lines text-sm hover:underline mb-4 inline-block">&larr; Change Crop</Link>
                    <div className="flex items-center gap-4">
                        <span className="text-4xl">{crop.image || "🌱"}</span>
                        <div>
                            <h1 className="text-3xl font-bold">{crop.name} Guidance</h1>
                            <p className="text-agri-lines mt-1">
                                Plan for {size} {unit} ({sizeInAcres.toFixed(2)} Acres)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                <div className="space-y-8">
                    {stages.map((stage, index) => (
                        <div key={stage.id} className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-agri-main">
                            <div className="p-6 md:p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-agri-light/20 rounded-lg flex items-center justify-center">
                                            <stage.icon className="h-6 w-6 text-agri-dark" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wide text-xs">Stage {index + 1}</h3>
                                            <h2 className="text-2xl font-bold text-gray-900">{stage.title}</h2>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">{stage.description}</p>

                                {/* Alerts */}
                                {stage.alerts && stage.alerts.length > 0 && (
                                    <div className="mb-6 space-y-2">
                                        {stage.alerts.map((alert, idx) => (
                                            <div key={idx} className={`p-4 rounded-lg flex gap-3 ${alert.type === 'danger' ? 'bg-red-50 text-red-800 border Border-red-200' :
                                                alert.type === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                                                    'bg-blue-50 text-blue-800 border border-blue-200'
                                                }`}>
                                                <AlertTriangle className="h-5 w-5 shrink-0" />
                                                <span className="text-sm font-medium">{alert.message}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Inputs Table */}
                                {stage.inputs.length > 0 && (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50 border-b border-gray-100">
                                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Input / Fertilizer</th>
                                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Recommended Qty</th>
                                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase text-red-600">Max Safe Limit</th>
                                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase text-green-700">Natural Alternative</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {stage.inputs.map((input, idx) => {
                                                    // Clean parsing logic for demo (naive parsing)
                                                    const baseQty = parseFloat(input.quantityPerAcre) || 0;
                                                    const baseLimit = parseFloat(input.maxLimit) || 0;

                                                    const calcQty = (baseQty * sizeInAcres).toFixed(1);
                                                    const calcLimit = (baseLimit * sizeInAcres).toFixed(1);
                                                    const unitStr = input.quantityPerAcre.replace(/[0-9.]/g, '') || "kg";

                                                    return (
                                                        <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                                                            <td className="p-4 font-semibold text-gray-800">
                                                                {input.name}
                                                                <div className="text-xs font-normal text-gray-500 mt-1 flex items-center">
                                                                    <Droplets className="h-3 w-3 mr-1" /> Apply: {input.applicationTiming}
                                                                </div>
                                                            </td>
                                                            <td className="p-4 font-mono font-bold text-agri-dark text-lg">
                                                                {calcQty} <span className="text-sm font-normal text-gray-500">{unitStr}</span>
                                                            </td>
                                                            <td className="p-4 font-mono text-red-600">
                                                                {calcLimit} <span className="text-xs">{unitStr}</span>
                                                            </td>
                                                            <td className="p-4">
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                    <Leaf className="h-3 w-3 mr-1" />
                                                                    {input.naturalAlternative}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {stage.inputs.length === 0 && (
                                    <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500 text-sm italic">
                                        No chemical inputs required for this stage. Focus on monitoring.
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function GuidancePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading guidance...</div>}>
            <GuidanceContent />
        </Suspense>
    )
}
