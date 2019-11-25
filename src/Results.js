import React, { Component } from 'react';

class Results extends Component {

  displayResults() {
    let resultsString = [];
    if (this.props.searchResults.results) {
    this.props.searchResults.results.forEach((result, index) => {
      resultsString.push(<li key={index}>{result.name}</li>);
      });
    return resultsString;
    }
  }

  componentWillUnmount() {
    this.props.setError(null);
  }

  render() {
    const queryString = (this.props.searchQuery === '' 
      ? '' 
      : <h3>Search Query: {this.props.searchQuery}</h3>);
    
    
    const displayError = () => {
      if (this.props.error) {
        return (
          <div id="error">
            <h2>Oops. It looks like there was an issue searching. Please try again later!</h2>
            <h3>{`(${this.props.error.message})`}</h3>
          </div>
        )
      }
    }

    return (
      <section>
        {displayError()}
        {!this.props.error && (
          <div id="results">
            <h2>Results</h2>
              <h3>Search Type: {this.props.searchType}</h3>
              {queryString}
            <ul>
              {this.displayResults()}
            </ul>
          </div>
        )}
        <div id="return">
          <button 
            id="return"
            onClick={() => this.props.navToSearch()}>
              Return
            </button>
        </div>
      </section>
    )
  }
}

export default Results;