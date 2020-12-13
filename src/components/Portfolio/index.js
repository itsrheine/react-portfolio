import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
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
    ])

    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project, i) => (
                    <Project
                        project={project}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;