import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
      this.state = {
        timerEnded: false,
        loadingDotNum: 0,
        fetchComplete: false
      }
  }

  getResults () {
    const baseURL = 'https://swapi.co/api';

    fetch(`${baseURL}/${this.props.searchType}/?search=${this.props.searchQuery}`, 
      { method:'GET', headers: {'content-type': 'application/json'} })
      .then(res => {
        return res.json();
      })
      .then(resultsData => {
        this.props.setSearchResults(resultsData);
        this.setState({fetchComplete: true})
      })
      .catch(e => {
        this.props.setError(e);
        this.setState({fetchComplete: true});
      })
  }

  computeLoadingDots = () => {
    let loadingDotString = '';
    for (let i = 1; i <= this.state.loadingDotNum; i++) {
      loadingDotString += ' .';
    }
    return loadingDotString;
  }

  componentDidMount() {
    setTimeout(() => this.setState({timerEnded: true}),3500);
    
    this.interval = setInterval(() => {
      if (this.state.loadingDotNum === 3) {
        this.setState({
          loadingDotNum: 0
        })
      } else {
        this.setState({
          loadingDotNum: this.state.loadingDotNum + 1
        })
      }
    }, 500)

    this.getResults();
  }

  componentWillUnmount() {
    this.setState({timerEnded: false});
    this.setState({fetchComplete: false});
    clearInterval(this.interval);
  }

  render() {
    if (this.state.timerEnded && this.state.fetchComplete) {
      this.props.navToResults();
    }
    
    return (
      <section>
        <h2>Loading {this.computeLoadingDots()}</h2>
        <div id="loading-img-container">
          <div id="warp-speed-img">
          </div>
        </div>
      </section>
    )
  }
}

export default Loading;