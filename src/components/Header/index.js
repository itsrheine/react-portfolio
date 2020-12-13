import React from 'react';

function Header(props) {
    return (
        <div id="header">
            <div class="container">
                    <a href="/" id="header-title">
                        rheine.nguyen
                    </a>
                    <ul id="header-nav">
                    {props.children}
                    </ul>
            </div>
        </div>
    );
}

export default Header;