
import React, { useState, useEffect } from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

interface QRCodeDisplayProps {
    qrCodeDataUrl: string;
    url: string;
    isLoading: boolean;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrCodeDataUrl, url, isLoading }) => {
    const [filename, setFilename] = useState('');

    /**
     * Simple, non-cryptographic hash function to generate a consistent hash from a string.
     * @param str The input string (e.g., the URL).
     * @returns A string representing the hash.
     */
    const simpleHash = (str: string): string => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = char + (hash << 6) + (hash << 16) - hash;
        }
        // Ensure a positive integer and convert to a hex string
        return `qrcode_${(hash >>> 0).toString(16)}`;
    };

    useEffect(() => {
        if (qrCodeDataUrl && url) {
            setFilename(simpleHash(url));
        }
    }, [qrCodeDataUrl, url]);

    const handleDownload = () => {
        if (!qrCodeDataUrl) return;
        const link = document.createElement('a');
        link.href = qrCodeDataUrl;
        
        const finalFilename = filename.endsWith('.png') ? filename : `${filename}.png`;
        link.download = finalFilename || 'qrcode.png';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (isLoading) {
        return (
             <div className="mt-6 flex justify-center items-center h-48 bg-gray-500/10 rounded-lg animate-pulse">
                <span className="text-gray-400">Generating preview...</span>
            </div>
        )
    }

    if (!qrCodeDataUrl) {
        return null;
    }

    return (
        <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 transition-all duration-500 ease-in-out transform animate-fade-in">
            <div className="flex flex-col items-center space-y-4">
                <img
                    src={qrCodeDataUrl}
                    alt="Generated QR Code"
                    className="w-48 h-48 bg-white p-2 rounded-md shadow-lg"
                />

                <div className="w-full">
                    <label htmlFor="filename-input" className="text-xs text-gray-400 mb-1 block text-left">
                        Filename
                    </label>
                    <div className="relative">
                        <input
                            id="filename-input"
                            type="text"
                            value={filename}
                            onChange={(e) => setFilename(e.target.value)}
                            className="w-full pl-3 pr-12 py-2 text-sm bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                            aria-label="QR Code Filename"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500 pointer-events-none">
                            .png
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500 transition-all duration-300"
                >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download PNG
                </button>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
};
