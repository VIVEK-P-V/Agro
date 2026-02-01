import Link from "next/link";
import { Menu } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
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
                        How It Works
                    </Link>
                    <Link href="/select-crop" className="transition-colors hover:text-agri-main">
                        Crop Guidance
                    </Link>
                    <Link href="/support" className="transition-colors hover:text-agri-main">
                        Farmer Support
                    </Link>
                    <Link href="/upload" className="transition-colors hover:text-agri-main">
                        Verify Practice
                    </Link>
                    <LanguageSelector />
                    <Link href="/select-crop" className="bg-agri-main text-white px-4 py-2 rounded-md hover:bg-agri-dark transition-colors">
                        Get Started
                    </Link>
                </nav>
                <div className="flex items-center ml-auto md:hidden space-x-4">
                    <LanguageSelector />
                    <button className="p-2">
                        <Menu className="h-6 w-6 text-agri-dark" />
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
