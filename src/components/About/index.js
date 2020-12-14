import React from 'react';
import defaultPhoto from '../../assets/images/defaultPhoto.JPG';


function About() {
    return (
        <div id="content">
            <div class="container">
                <div class="about">
                    <div class="about-author">
                        <img className="defaultPhoto" src={defaultPhoto} alt="Me at an event" ></img>
                    </div>
                    <h3 class="post-title">Becoming a web developer</h3>
                    <div class="post-content">
                        <p>My name is Marrione Nguyen, my friends and family call me 'Rheine'.  I am a Technical Writer for compliance and product testing industry. As a Technical Writer (focused on Environmental Simulation Testing), I am responsible for reviewing and compiling data
                            that was collected by the engineers.  During my years as a technical writer, I gained a wide-range of knowledge and understanding about complaince testing.  As a result, I am able to tell if the engineer correctly declared if a product is complaint or non-compliant.
                        </p>
                        <p>Currently, I am pursuing Full Stack Web Development at UC Berkeley Extension.  I am an aspiring web developer hoping to create a report generator that can take in massive amounts of data while being operated by multiple engineers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;