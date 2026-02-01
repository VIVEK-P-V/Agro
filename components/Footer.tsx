import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-agri-dark text-white py-12 border-t border-agri-light/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-white mb-4 block">AgriFlux</span>
                        <p className="text-gray-300 text-sm">
                            Empowering farmers with sustainable technology and innovative crop care solutions for a better tomorrow.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-agri-accent">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-agri-accent">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>123 Farming Lane</li>
                            <li>Green Valley, CA 90210</li>
                            <li>info@agriflux.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-agri-accent">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} AgriFlux Crop Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
