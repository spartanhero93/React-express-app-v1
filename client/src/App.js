import React, { Component } from 'react';
import axios from "axios";
import { Wrapper } from "./Styles/index";
import Inventory from "./Components/Index"

class App extends Component {
  state = {
    data: [],
    text: "", 
    isLoaded: false
  };

  componentDidMount() {
    axios.get(`/getItems/`)
    .then(res => {
      this.setState({ data: res.data, isLoaded: true });
    });
  }


  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    axios.get(`/getItems/${this.state.text}`)
    .then(res => {
      this.setState({ data: res.data, })
    })
  }


  render() {
    console.log(this.state.data)
    return (
      <Wrapper>
        <div>
          <h1>Searching: {this.state.text}</h1>
          <input type="text" name="name" value={this.state.text} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Search Items</button>
        </div>
        <Inventory isLoaded={this.state.isLoaded} data={this.state.data} />
      </Wrapper>
    )
  }
}

export default App;
