import React, { Component } from 'react';
import * as Styled from "./Styles/index";
import axios from "axios";
import Inventory from "./Components/Index";

class App extends Component {
  state = {
    allItems: [],
    isLoaded: false
  };

  componentDidMount() {
    this.callApi()
  }

  callApi = () => {
    Promise.all([
      axios.get(`/inventory/`),
      axios.get(`/products/`)
    ])
    .then(([inventory, products]) => {
      [inventory, products] = [inventory.data.inventory, products.data]
      let combinedArr = inventory.map(items_1 => {
        return Object.assign(items_1, products.find(items_2 => {
          return items_2 && items_1.name === items_2.name;
        }))
      })
      this.setState({
        allItems: combinedArr,
        isLoaded: true
      })
    });
  };

  render() {
    console.log(this.state.allItems);
    return (
          <Inventory inventory={this.state.allItems} isLoaded={this.state.isLoaded}/>
    );
  }
}

export default App;
