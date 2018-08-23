import React from 'react';

const currentPath = window.location.pathname;

const showHeader = () => {
    if (currentPath.includes('recipes')) {
        return null;
    }else{
        return(
            <div className="App-header">      
                <h1>Wordpress Posts Scraper</h1>
                <p>Using Wordpress RESTful API in React.js + Express.js as frontend.</p>
            </div>
        )
    }
}

const Header = () => (  
    showHeader()
)
export default Header;