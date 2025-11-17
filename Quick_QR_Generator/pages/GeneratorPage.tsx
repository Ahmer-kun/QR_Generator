import React, { useState, useCallback } from 'react';
import { UrlInput } from '../components/UrlInput';
import { QRCodeDisplay } from '../components/QRCodeDisplay';
import { QrCodeIcon } from '../components/icons/QrCodeIcon';

// This tells TypeScript that the QRCode library is available globally, loaded from the CDN in index.html
declare var QRCode: any;

export const GeneratorPage: React.FC = () => {
    const [url, setUrl] = useState<string>('');
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateQRCode = useCallback(async () => {
        if (!url.trim()) {
            setError('Please enter a URL or text to generate a QR code.');
            setQrCodeDataUrl('');
            return;
        }

        setError(null);
        setIsLoading(true);
        setQrCodeDataUrl('');

        try {
            const dataUrl = await QRCode.toDataURL(url, {
                errorCorrectionLevel: 'H',
                type: 'image/png',
                quality: 0.98,
                margin: 1,
                width: 300,
                color: {
                    dark: '#01050C',
                    light: '#FFFFFF',
                },
            });
            setQrCodeDataUrl(dataUrl);
        } catch (err) {
            console.error(err);
            setError('Failed to generate QR code. The input may be too long or invalid.');
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return (
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 animate-fade-in-up">
            <div className="p-6 sm:p-8">
                <header className="flex flex-col items-center text-center mb-6">
                    <div className="p-3 mb-3 bg-blue-500/20 rounded-full">
                       <QrCodeIcon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
                        Quick QR Generator
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">
                       Instantly generate and download QR codes for your links.
                    </p>
                </header>
                
                <main>
                    <UrlInput
                        url={url}
                        setUrl={setUrl}
                        onGenerate={handleGenerateQRCode}
                        isLoading={isLoading}
                    />
                     {error && (
                        <div className="mt-4 text-center text-red-400 bg-red-500/10 p-3 rounded-lg text-sm transition-all duration-300 ease-in-out">
                            {error}
                        </div>
                    )}
                    <QRCodeDisplay qrCodeDataUrl={qrCodeDataUrl} url={url} isLoading={isLoading} />
                </main>
            </div>
            <footer className="bg-black/20 px-6 py-4 text-center text-xs text-gray-500 border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Quick QR Generator. All Rights Reserved.</p>
            </footer>
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