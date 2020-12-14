import React from 'react';
import defaultPhoto from '../../assets/images/defaultPhoto.jpg';


function About() {
    return (
        <div id="content">
            <div class="post-container">
                <div class="post">
                    <div class="post-author">
                        <img className="defaultPhoto" src={defaultPhoto} alt="Me at an event" ></img>
                        <span>Rheine</span>
                    </div>
                    <h3 class="post-title">Becoming a web developer</h3>
                    <div class="post-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel libero doloremque, iure velit dolores harum rerum facilis fugit corporis voluptates consequuntur ex id earum quisquam inventore, molestiae odit! Earum!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel libero doloremque, iure velit dolores harum rerum facilis fugit corporis voluptates consequuntur ex id earum quisquam inventore, molestiae odit! Earum!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;