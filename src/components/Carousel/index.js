import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import Project from '../Project';

function App() {
    const [activeSlide, setActiveSlide] = useState(0);

    const [projects] = useState([
        {
            name: 'Travel Dashboard',
            desciption: 'Travel Search Engine',
            link: 'https://itsrheine.github.io/Travel-Dashboard/',
            github: 'https://github.com/itsrheine/Travel-Dashboard'
        },
        {
            name: 'Tech Blog',
            description: 'Social media-like blog for Tech professionals',
            link: 'http://thawing-temple-74323.herokuapp.com/',
            github: 'https://github.com/itsrheine/tech-blog'
        },
        {
            name: 'Note Taker',
            description: 'Virtual Notepad',
            link: 'https://immense-wildwood-69263.herokuapp.com',
            github: 'https://github.com/itsrheine/note-taker'
        },
        {
            name: 'Budget Tracker',
            description: 'Web & Mobile Interactive budget Tracker',
            link: 'https://protected-basin-21646.herokuapp.com/',
            github: 'https://github.com/itsrheine/budget-tracker'
        },
        {
            name: 'TransferCard',
            description: 'A virtual train ticket app',
            link: 'https://transfercard.herokuapp.com/',
            github: 'https://github.com/itsrheine/transferCard'
        }
    ])

    return (
        <div>
            <Carousel  
                updateOnItemClick
                containerProps={{
                    style: {
                        width: "100%",
                        justifyContent: "space-between"
                    }
                }}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        width: "100%",
                    }
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children: ">",
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        alignSelf: "center"
                    }
                }}
                backwardBtnProps={{
                    children: ">",
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        alignSelf: "center"
                    }
                }}
                itemsToShow={1}
                speed={400}
                >
                    {projects.map((project, i) => (
                        <Project
                            project={project}
                            i={i}
                        />
                    ))}
                </Carousel>
        </div>
    );
}

export default App;