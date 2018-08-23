import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class SearchComponent extends Component {
  constructor(props){
    super(props);  
    this.state = {
      searchValue: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleSearch = (event) => {    
    event.preventDefault();
    let searchWord = this.state.searchValue;
    this.setState({ searchValue: '' });
    this.props.history.push("/search/" + searchWord);
  }

  render() {
    return (
      <div className="searchBox">
        <form ref="form" onSubmit={this.handleSearch} id='search-form'>
          <input
            id='search-text'
            type='text'
            placeholder='Search...'
            value={this.state.searchValue} 
            onChange={this.handleChange} 
          />
         <input type='submit' value="" id='search-button'/>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchComponent);