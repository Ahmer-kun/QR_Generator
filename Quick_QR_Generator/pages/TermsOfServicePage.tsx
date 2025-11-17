import React from 'react';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';

interface TermsOfServicePageProps {
    onNavigate: () => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
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
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Terms of Service</h1>
                <p className="text-sm text-gray-500 mt-1">Last Updated: {new Date().toLocaleDateString()}</p>
            </header>
            <main className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none space-y-4 text-left">
                <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using Quick QR Generator (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-xl font-semibold">2. Description of Service</h2>
                <p>
                    The Service provides users with a free, client-side tool to generate QR codes from user-provided data. The generated QR codes can be downloaded as image files.
                </p>

                <h2 className="text-xl font-semibold">3. User Conduct and Responsibilities</h2>
                <p>
                    You are solely responsible for the content you encode into QR codes using the Service. You agree not to use the Service for any unlawful purpose, including but not limited to creating QR codes that link to malware, phishing websites, illegal content, or any material that infringes on the rights of others.
                </p>

                <h2 className="text-xl font-semibold">4. Disclaimer of Warranties</h2>
                <p>
                    The Service is provided "as is" and "as available" without any warranty of any kind. We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free. The accuracy and reliability of the generated QR codes are not guaranteed.
                </p>

                <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
                <p>
                    In no event shall the creators of Quick QR Generator be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the Service.
                </p>

                <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. Your decision to continue to visit and make use of the Service after such changes have been made constitutes your formal acceptance of the new Terms of Service.
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
