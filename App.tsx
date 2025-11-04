import React, { useState } from 'react';
import SqueezePage from './components/SqueezePage';
import VSLPage from './components/VSLPage';

type Page = 'squeeze' | 'vsl';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('squeeze');

    const handleSuccess = () => {
        setCurrentPage('vsl');
        window.scrollTo(0, 0);
    };

    return (
        <div className="bg-[#0A0A1F] min-h-screen text-white">
            {currentPage === 'squeeze' ? (
                <SqueezePage onSuccess={handleSuccess} />
            ) : (
                <VSLPage />
            )}
        </div>
    );
};

export default App;