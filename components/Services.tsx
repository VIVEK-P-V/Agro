import { Sprout, ShieldCheck, BarChart3, Droplets } from "lucide-react";

const services = [
    {
        title: "Crop Protection",
        description: "Advanced pest and disease management solutions utilizing bio-friendly agents to ensure healthy growth.",
        icon: ShieldCheck,
    },
    {
        title: "Soil Analysis",
        description: "Comprehensive soil health monitoring to optimize nutrient delivery and improved structural integrity.",
        icon: Sprout,
    },
    {
        title: "Precision Irrigation",
        description: "Smart water management systems that reduce waste and ensure crops receive exactly what they need.",
        icon: Droplets,
    },
    {
        title: "Yield Monitoring",
        description: "Data-driven insights to predict harvests and improved operational planning for maximum efficiency.",
        icon: BarChart3,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-agri-dark sm:text-4xl">
                        Our Expertise
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide comprehensive agricultural services tailored to modern farming needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="h-12 w-12 bg-agri-light/20 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="h-6 w-6 text-agri-dark" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
