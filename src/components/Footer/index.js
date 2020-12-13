import React from 'react';
import Github from '../../assets/images/github.png';
import LinkedIn from '../../assets/images/linkedin.png';


function Footer() {

    return (
        <div id="footer">
            <div class="container">
                <div class="column">
                    <h4>Connect with Me</h4>
                    <p>
                        <a href="https://www.github.com/itsrheine" target="blank"><img src={Github}></img></a>
                        <a href="https://www.linkedin.com/in/marrionenguyen/" target="blank"><img src={LinkedIn}></img></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;