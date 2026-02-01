import { HelpCircle, Phone, MessageCircle } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-3xl font-bold text-agri-dark mb-8 text-center">Farmer Support</h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <HelpCircle className="h-5 w-5 mr-2 text-agri-main" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <details className="group border-b border-gray-100 pb-4">
                            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 hover:text-agri-main">
                                How do I reduce urea usage?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="mt-2 text-gray-600">You can replace 25-50% of chemical urea with farmyard manure or vermicompost. Apply in splits to reduce strict dependency.</p>
                        </details>
                        <details className="group border-b border-gray-100 pb-4">
                            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 hover:text-agri-main">
                                What if my leaves are turning yellow?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="mt-2 text-gray-600">Yellowing leaves often indicate nitrogen or magnesium deficiency. Check soil moisture first, then consider a foliar spray of NPK 19:19:19.</p>
                        </details>
                        <details className="group border-b border-gray-100 pb-4">
                            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 hover:text-agri-main">
                                How do I verify my harvest for better prices?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="mt-2 text-gray-600">Use the 'Verify Practice' section to upload photos at each stage (Sowing, Growth, Harvest). This creates a digital record for buyers.</p>
                        </details>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-agri-dark text-white p-6 rounded-xl shadow-md">
                        <Phone className="h-8 w-8 mb-4 opacity-80" />
                        <h3 className="text-xl font-bold mb-2">Call Expert</h3>
                        <p className="text-agri-lines mb-4 text-sm">Talk to an agricultural scientist directly.</p>
                        <button className="w-full bg-white text-agri-dark py-2 rounded font-bold hover:bg-gray-100">
                            Call 1800-AGRI-HELP
                        </button>
                    </div>
                    <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
                        <MessageCircle className="h-8 w-8 mb-4 opacity-80" />
                        <h3 className="text-xl font-bold mb-2">WhatsApp Help</h3>
                        <p className="text-green-100 mb-4 text-sm">Send photos of your crop for instant advice.</p>
                        <button className="w-full bg-white text-green-700 py-2 rounded font-bold hover:bg-gray-100">
                            Chat Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
