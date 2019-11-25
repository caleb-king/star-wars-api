import React, { Component } from 'react';

class Search extends Component {
  getResults = () => {
    this.props.navToLoading();

    //fetch
  }

  render() {
    return (
      <section>
        <h1>Search the Star Wars Universe !</h1>
        <form id="search-swapi">
          <div>
            <label htmlFor="select-type">Select what you would like to search -></label>
            {/* planets, spaceships, vehicles, characters, films or species */}
            <select 
              name="select-type" 
              form="search-swapi" 
              onChange={(e) => {this.props.setSearchType(e.target.value)}}
              value={this.props.searchType}>
              <option value="people">people</option>
              <option value="species">species</option>
              <option value="planets">planets</option>
              <option value="vehicles">vehicles</option>
              <option value="starships">starships</option>
            </select>
          </div>
          <div>
            <label htmlFor="select-type">Enter search query here -></label>
            <input 
            placeholder="e.g. Skywalker" 
            form="search-swapi" 
            type="text" 
            id="search-field-input"
            value={this.props.searchQuery}
            onChange={(e) => {this.props.setSearchQuery(e.target.value)}}
            >
            </input>
          </div>
          <div id="button-container">
            <button 
              type="submit" 
              form="search-swapi" 
              onClick={(e) => {
                e.preventDefault();
                this.getResults();
              }}>
              SEARCH
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default Search;