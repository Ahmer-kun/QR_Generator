import React from 'react';
import { QrCodeIcon } from '../components/icons/QrCodeIcon';

interface IntroPageProps {
    onNavigate: () => void;
}

export const IntroPage: React.FC<IntroPageProps> = ({ onNavigate }) => {
    return (
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <div className="inline-block p-4 mb-4 bg-blue-500/20 rounded-full">
                <QrCodeIcon className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
                Welcome to Quick QR Generator
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
                The simplest way to create, customize, and download high-quality QR codes for free. Turn any link, text, or idea into a scannable code in seconds.
            </p>
            <div className="mt-10">
                <button
                    onClick={onNavigate}
                    className="px-8 py-4 font-bold text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                    Create Your QR Code
                </button>
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.7s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
};
