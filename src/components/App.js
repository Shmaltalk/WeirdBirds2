import React, { Component } from 'react';

import Cardlist from './CardList';
import SortAndFilter from './SortAndFilter';
import birds from '../birds';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: birds,
      filters: {acts: false, looks: false, favorites: false},
      sortFunction: ''
    }
    this.updateFilter = this.updateFilter.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  updateFilter(filter) {
    const tempFilters = {...this.state.filters}
    tempFilters[filter] = !this.state.filters[filter]
    this.setState({ filters: tempFilters });
  }

  updateSort(newSort) {
    this.setState({ sortFunction: newSort });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-body">
          <h1>Weird Birds</h1>
          <h3>Inspired by <a href="https://stonemaiergames.com/games/wingspan/">Wingspan</a></h3>
          <div className="content">
            <SortAndFilter filters={this.state.filters} updateFilter={this.updateFilter} updateSort={this.updateSort} />
            <Cardlist birds={birds} filters={this.state.filters} sortFunction={this.state.sortFunction}/>
          </div>
          <div>A fun project by Talie Massachi</div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </div>
    ); 
  }
}

export default App;
