import React from 'react';

function Project({ project, i }) {

    return (
        <div className="flex-container">
            <div className="flex-row">
                <h3>{project.name}</h3>
            </div>
            <div className="flex-row">
                <p>{project.description}</p>
            </div>
            <div className="flex-row">
                <img src={require(`../../assets/images/proj-${i+1}.png`).default} alt="project completed by myself"></img>
            </div>
            <div className="flex-row">
                <p><a href={project.link} target="blank">
                    Visit Deployed Application
                </a></p>
                <p><a href={project.github} target="blank">
                    Visit Github Repository
                </a></p>
            
            </div>
        </div>
    );
}
export default Project;