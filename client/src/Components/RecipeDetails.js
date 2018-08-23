import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
//import $ from 'jquery';

const API = 'https://panlasangpinoy.com/wp-json/wp/v2/posts/'
// const QUERY = '?per_page=10&_embed&page=';
//const QUERY = '/18610?_embed'

class RecipeDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: {
          id: '',
          title: {rendered: ''},
          content: {rendered: ''},
          _embedded: {
              'wp:featuredmedia': {
                  '0': {
                      media_details: {
                          sizes: {
                              thumbnail: {
                                  source_url: ''
                              },
                              'full': {
                                source_url: ''
                            }
                          }
                      }
                  }
              }
            },
      },
      loading: false,
      dataRoute: API + this.props.match.params.id + '?_embed'
    }
  }
  componentDidMount = () => {
      this.fetchData();
  }

  fetchData = () => {    
    this.setState({
        loading: true
    })
    
    fetch(this.state.dataRoute)
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(recipe => this.setState({    
        recipe: recipe,
        loading: false,
      }))
      .catch(error => {        
        this.setState({ 
          loading: false,
          error 
        });
        console.log(error);
      })
  };

  mapRecipeDetails = () =>{
      
  }

  render() {
    

    if (this.state.error){
        return <p>{this.state.error.message}</p>
    }

    if(!this.state.recipe) {
      return null;
    }else{
      let recipeTitle = this.state.recipe ? this.state.recipe.title.rendered : null;
      let recipeId = this.state.recipe.id;
      let recipeImage = this.state.recipe._embedded['wp:featuredmedia']['0'].media_details.sizes['full'].source_url;
      let recipeContent = this.state.recipe.content.rendered;
      //let cleanRecipeContent = $(recipeContent).find("img").remove().end().html();
      let cleanRecipeContent = recipeContent.replace(/<img[^>]*>/g,"");

      let divStyle = {
        backgroundImage: 'url(' + recipeImage + ')',
      }

      return (
        <div className='main-content'>
          <div className={'recipe-content'} key={`recipe-${recipeId}`} >
              <div className='recipe-background' style={divStyle}> </div>
              <div className='recipe-details'>
                <h3>{recipeTitle}</h3>
                <p dangerouslySetInnerHTML={{__html: cleanRecipeContent}} />            
              </div>
              
          </div>
        </div>
      );
    }
  }
}

export default RecipeDetails;