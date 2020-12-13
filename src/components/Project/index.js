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
                <img src={require(`../../assets/images/proj-${i+1}.png`)}></img>
            </div>
            <div className="flex-row">
                <a href={project.link} target="blank">
                    <p>Visit Deployed Application</p>
                </a>
                <a href={project.github} target="blank">
                    <p>Visit Github Repository</p>
                </a>
            </div>
        </div>
    );
}
export default Project;