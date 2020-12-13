import React from 'react';

function Header(props) {
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    rheine.nguyen
                </a>
                {props.children}
            </h2>
        </header>
    );
}

export default Header;