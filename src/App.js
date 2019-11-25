import React, { Component } from 'react';
import './fonts/starwarsfontface.css'
import './App.css'
import Search from './Search'
import Loading from './Loading'
import Results from './Results'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchType: 'people',
      searchQuery: '',
      searchResults: [],
      error: null
    }
  }

  setSearchType = (searchType) => {
    this.setState({searchType});
  }

  setSearchQuery = (searchQuery) => {
    this.setState({searchQuery});
  }

  setSearchResults = (searchResults) => {
    this.setState({searchResults});
  }

  setError = (error) => {
    this.setState({error});
  }

  render() {
    return (
      <main className='App'>
        <Route 
          exact 
          path="/" 
          render={({ history }) => {
            return (
            <Search 
              searchType={this.state.searchType}
              searchQuery={this.state.searchQuery}
              setSearchType={this.setSearchType}
              setSearchQuery={this.setSearchQuery}
              navToLoading={() => history.push('/loading')}
            />
            )
          }}
        />
        {/* <Route path="/loading" component={Loading} /> */}
        <Route 
          path="/loading" 
          render={({history}) => {
            return (
            <Loading 
              searchType={this.state.searchType}
              searchQuery={this.state.searchQuery}
              searchResults={this.state.searchResults}
              setSearchResults={this.setSearchResults}
              setError={this.setError}
              navToResults={() => history.push('/results')}
            />
            )
          }}
        />
        <Route 
          path="/results" 
          render={({history}) => {
            return (
            <Results 
              searchType={this.state.searchType}
              searchQuery={this.state.searchQuery}
              searchResults={this.state.searchResults}
              setSearchResults={this.setSearchResults}
              setError={this.setError}
              error={this.state.error}
              navToSearch={() => history.push('/')}
            />
            )
          }}
        />
      </main>
    );
  }
}

export default App;