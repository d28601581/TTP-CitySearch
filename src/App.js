import React from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import ZipCode from './Components/ZipCode';
import './App.css';

class App extends React.Component {
  state = { zipcode: [] }
  onSearchSubmit = async (term) => {
    const response = await axios.get(`http://ctp-zip-api.herokuapp.com/city/${term}`);
    this.setState({ zipcode: response.data })
    console.log(this.state.zipcode)
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ZipCode zipcode = {this.state.zipcode} />
      </div>
    );
  }
}

export default App;
