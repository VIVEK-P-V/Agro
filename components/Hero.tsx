import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-agri-dark py-20 text-white md:py-32">
            {/* Background pattern equivalent - purely CSS for now to avoid image deps */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#ECF39E_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Innovating <span className="text-agri-accent">Agriculture</span> for a Sustainable Future
                    </h1>
                    <p className="mt-6 text-lg text-agri-lines sm:text-xl text-gray-200">
                        Advanced crop care solutions, precision monitoring, and sustainable farming practices designed to maximize your yield.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-agri-accent px-8 text-sm font-medium text-agri-dark shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Consult Now
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-agri-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Our Services <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
