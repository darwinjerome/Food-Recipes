import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';

// import masonry component after npm install
// import Masonry from 'react-masonry-component';

class Recipes extends Component {
  render() {
    let recipeItems;
    
    if(this.props.recipes){
        recipeItems = this.props.recipes.map(recipe => {
        
        return (
          <RecipeItem key={recipe.id} recipe={recipe} />
        );
      });
    }
    return (
      <div className="Recipes">
        <h3>Recipes List</h3>
        <p>Data from this list are source from external API and rendered by React.js. <a href="https://panlasangpinoy.com/wp-json/wp/v2/posts">view api</a></p>
        <ul>
            {recipeItems}
        </ul>
        
      </div>
    );
  }

}

Recipes.propTypes = {
  recipes: PropTypes.array,
}

export default Recipes;
