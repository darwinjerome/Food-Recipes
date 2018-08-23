import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeItem extends Component {
  render() {
    return (
        <li className="Recipe">
          {/* {this.props.recipe.id}) {this.props.recipe.title} - {this.props.recipe.completed.toString()} */}
          {this.props.recipe.id}) {this.props.recipe.title.rendered} - {this.props.recipe.featured_media}
        </li>
    );  
  }
}

RecipeItem.propTypes = {
    recipe: PropTypes.object
}
  
export default RecipeItem;