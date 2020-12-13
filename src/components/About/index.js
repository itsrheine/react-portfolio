import React from 'react';
import defaultPhoto from '../../assets/images/defaultPhoto.JPG';


function About() {
    return (
        <div>
            <div>
                <img className="defaultPhoto" src={defaultPhoto} alt="Me at an event"></img>
            </div>
            <div>
                <h2>About Me</h2>
                <p>
                    Bio here
                </p>
            </div>
        </div>
    );
}

export default About;