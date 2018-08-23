import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import RecipeList from '../Components/Recipes';


class RecipeItem extends Component {
  constructor(props){
    super(props);
    this.state = {
        searchValue: this.props.match.params.keyword,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.keyword !== nextProps.match.params.keyword) {
      this.setState({
        searchValue: nextProps.match.params.keyword,
      });
    }
  }

  render() {
    return (
      <div className="home-content">
        <div className="searchString">
          <h3>Searching for: {this.state.searchValue}</h3>
        </div>  
        <RecipeList keyword={this.state.searchValue} />
      </div>
    );
  }
}
export default RecipeItem;