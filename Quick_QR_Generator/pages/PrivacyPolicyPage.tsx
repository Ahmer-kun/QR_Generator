import React from 'react';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';

interface PrivacyPolicyPageProps {
    onNavigate: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
    return (
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20 animate-fade-in-up text-gray-300">
            <header className="relative mb-6 text-center">
                <button 
                    onClick={onNavigate} 
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Back to generator"
                >
                    <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mt-1">Last Updated: {new Date().toLocaleDateString()}</p>
            </header>
            <main className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none space-y-4 text-left">
                <p>
                    Your privacy is important to us. At Quick QR Generator, we have a fundamental principle: your data is your own. This Privacy Policy explains how we handle information when you use our website.
                </p>

                <h2 className="text-xl font-semibold">Our Core Principle: Client-Side Operation</h2>
                <p>
                    Quick QR Generator is a fully client-side application. This means that all the processing, including the generation of QR codes from the data you provide, happens directly within your web browser on your own device.
                </p>

                <h2 className="text-xl font-semibold">Information We Do Not Collect</h2>
                <p>
                    We do not collect, view, store, or transmit any personal information or the content you enter into the generator. The URLs, text, or any other data you use to create a QR code never leave your computer and are never sent to our servers or any third-party service.
                </p>

                <h2 className="text-xl font-semibold">Cookies and Analytics</h2>
                <p>
                    This website does not use cookies for tracking or any analytics software to monitor your activity. We believe in a simple, private, and straightforward user experience.
                </p>
                
                <h2 className="text-xl font-semibold">Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
                </p>

                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please feel free to reach out through the contact links provided in the site footer.
                </p>
            </main>
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
};
