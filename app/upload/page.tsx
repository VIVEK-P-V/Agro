"use client";

import { useState } from "react";
import { Upload, CheckCircle, Image as ImageIcon } from "lucide-react";

export default function UploadPage() {
    const [step, setStep] = useState(1);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        // Mock upload logic
        setTimeout(() => setStep(3), 1500);
        setStep(2);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-agri-dark p-6 text-white text-center">
                    <h1 className="text-2xl font-bold">Verify Your Practice</h1>
                    <p className="text-agri-lines text-sm mt-1">Upload photos to certify safe farming.</p>
                </div>

                <div className="p-8">
                    <div className="mb-8 flex justify-between items-center px-4">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`flex flex-col items-center ${step >= s ? 'text-agri-main' : 'text-gray-300'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold mb-1 ${step >= s ? 'border-agri-main bg-agri-main/10' : 'border-gray-200'}`}>
                                    {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                                </div>
                                <span className="text-xs font-medium">{s === 1 ? 'Select Stage' : s === 2 ? 'Upload' : 'Verified'}</span>
                            </div>
                        ))}
                    </div>

                    {step === 1 && (
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">Farming Stage</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-agri-main">
                                <option>Soil Preparation</option>
                                <option>Sowing / Planting</option>
                                <option>Fertilizer Application</option>
                                <option>Harvest</option>
                            </select>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                                <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                {file ? (
                                    <div className="text-agri-dark font-medium flex flex-col items-center">
                                        <ImageIcon className="h-8 w-8 mb-2" />
                                        {file.name}
                                    </div>
                                ) : (
                                    <div className="text-gray-500 flex flex-col items-center">
                                        <Upload className="h-8 w-8 mb-2 text-gray-400" />
                                        <span className="text-sm">Click to upload photo evidence</span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleUpload}
                                disabled={!file}
                                className="w-full bg-agri-main text-white py-3 rounded-md font-bold hover:bg-agri-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Submit for Verification
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-agri-main mx-auto mb-4"></div>
                            <p className="text-gray-600">Verifying image metadata...</p>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center py-8">
                            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Verification Successful!</h3>
                            <p className="text-gray-600 mb-6">Your record has been updated. You are one step closer to Safe Crop Certification.</p>
                            <button
                                onClick={() => { setStep(1); setFile(null); }}
                                className="text-agri-main font-bold hover:underline"
                            >
                                Upload another photo
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
