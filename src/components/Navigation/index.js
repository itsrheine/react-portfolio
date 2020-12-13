import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav>
            <ul id="header-nav" className="flex-row">
                {categories.map(category => (
                    <li className={`mx-1 ${currentCategory.name === category.name && `navActive`}`}
                    key={category.name}
                    >
                        <a onClick={() => {setCurrentCategory(category)}} href={'#' + category.name}>
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;