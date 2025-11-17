import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GithubIcon } from './icons/GithubIcon';
import { TwitterIcon } from './icons/TwitterIcon';

interface MainFooterProps {
    onNavigate: (page: 'privacy' | 'terms') => void;
}

export const MainFooter: React.FC<MainFooterProps> = ({ onNavigate }) => {
    return (
        <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                    <p>Created with ❤️ by <a href="https://github.com/Ahmer-kun" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">Ahmer Amir</a></p>
                    <div className="flex space-x-4 border-t sm:border-t-0 sm:border-l border-gray-700 pt-2 sm:pt-0 sm:pl-6">
                         <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                         <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms of Service</button>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <a 
                        href="https://www.linkedin.com/in/muhammad-ahmer-b88485283/"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn Profile"
                        className="hover:text-white transition-colors"
                    >
                        <LinkedInIcon className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://github.com/Ahmer-kun"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub Profile"
                        className="hover:text-white transition-colors"
                    >
                        <GithubIcon className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://x.com/AhmerAmir7"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Twitter Profile"
                        className="hover:text-white transition-colors"
                    >
                        <TwitterIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};