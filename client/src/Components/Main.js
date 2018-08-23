import React from 'react'
import { Switch, Route } from "react-router-dom";
import Recipes from './Recipes';
import RecipeItem from './RecipeItem';
import RecipeDetails from './RecipeDetails';
import About from '../Containers/About'

const Main = () => (    
    <main>
        <Switch>
            <Route exact path="/" component={Recipes} />
            <Route exact path="/recipeitem" component={RecipeItem} />
            <Route exact path="/recipes/:id" component={RecipeDetails} />
            <Route exact path="/about/" component={About} />
        </Switch>
    </main>
)
export default Main;