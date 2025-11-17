import React, { useState } from 'react';
import { IntroPage } from './pages/IntroPage';
import { GeneratorPage } from './pages/GeneratorPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { MainFooter } from './components/MainFooter';

type Page = 'intro' | 'generator' | 'privacy' | 'terms';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('intro');

    const renderPage = () => {
        switch (page) {
            case 'intro':
                return <IntroPage onNavigate={() => setPage('generator')} />;
            case 'generator':
                return <GeneratorPage />;
            case 'privacy':
                return <PrivacyPolicyPage onNavigate={() => setPage('generator')} />;
            case 'terms':
                return <TermsOfServicePage onNavigate={() => setPage('generator')} />;
            default:
                return <IntroPage onNavigate={() => setPage('generator')} />;
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex flex-col font-sans">
            <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                {renderPage()}
            </main>
            <MainFooter onNavigate={setPage} />
        </div>
    );
};

export default App;