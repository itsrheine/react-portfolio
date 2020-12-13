import React from 'react';
import Contact from '../Contact';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Gallery ({ currentCategory }) {
    const renderPage = () => {
        switch(currentCategory.name) {
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    }

    return (
        <div>
            {renderPage(currentCategory)}
        </div>
    );
}

export default Gallery;