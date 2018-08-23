import React from 'react';
import RecipeList from '../Components/Recipes';


const Home = () => {
    return(
        <div className="home-content">  
            <RecipeList keyword="all" /> 
        </div>
    )
}

export default Home;