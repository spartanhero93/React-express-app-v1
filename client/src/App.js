import React, { Component } from 'react';
import * as Styled from "./Styles/index";
import axios from "axios";
import Inventory from "./Components/Inventory";

class App extends Component {
  state = {
    inventory: [],
    products: [],
    isLoaded: false
  };

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    const inventoryPromise = axios("/inventory");
    const productsPromise  = axios("/products");
    const [inventory, products] = await Promise.all([inventoryPromise, productsPromise]);
    this.setState(
      { 
        inventory: JSON.parse(inventory.data).inventory, 
        products:  JSON.parse(products.data),
        isLoaded: true 
      }
    );
    // console.log(this.state.inventory);
    // console.log(this.state.products);
  };

  render() {
    if(this.state.isLoaded === false) {
      return <h1>Now Loading</h1>
    } 
    return (
      <Styled.Wrapper>
        <Styled.Table>
          <div>
              <h1>Current Inventory: </h1>
              <Inventory inventory={this.state.inventory} products={this.state.products}/>
          </div>
          <input type="text"/>
        </Styled.Table>
      </Styled.Wrapper>
    );
  }
}

export default App;
