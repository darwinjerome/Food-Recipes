import React, { Component } from 'react';
import './App.css';

//import $ from 'jquery';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      dataRoute: "https://panlasangpinoy.com/wp-json/wp/v2/posts?per_page=30&_embed" 
    }
    
  }


  componentWillMount(){
    
  }

  componentDidMount(){
    
    fetch(this.state.dataRoute)
    .then(res => res.json())
    .then(recipes => this.setState((prevState, props) => {
        return {recipes: recipes.map(this.mapRecipe)};
    }));

  }

  mapRecipe(recipe){
    console.log(`Image Name: ` + recipe.title.rendered)
    console.log(`Image path: ` + recipe._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url)
    
    return {
      id: recipe.id,
      price: recipe.date,
      image: recipe._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url,
      name: recipe.title.rendered
    }
  }

  render() {

  return (
    <div className="App">
      <div className="App-header">      
        <h1>Wordpress Scraper</h1>
        <p>An API call to read from a wordpress json feed.</p>
      </div>
      
      <div className="main-content">
        <div className="recipes">
          {this.state.recipes.map((recipe) => 
            <div className="recipe" key={`recipe-${recipe.id}`}>
            
              <img src={ recipe.image } alt={ recipe.name } className="recipe-image"/>
              <p>{ recipe.name }</p>
              <a href="/" >view</a>
            </div>
          )}
        </div>  
      </div>
    </div>
  );


  }
  

  
}

export default App;
