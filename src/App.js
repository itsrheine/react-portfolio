import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [categories] = useState([
        { name: 'About' },
        { name: 'Work' },
        { name: 'Contact' },
        { name: 'Resume' }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div>
            <Header>
                <Navigation
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                ></Navigation>
            </Header>

            <main>
                <Gallery currentCategory={currentCategory} />
            </main>
            <Footer />
        </div>
    );
}