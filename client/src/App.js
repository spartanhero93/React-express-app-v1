import React, { Component } from 'react';
import * as Styled from "./Styles/index";
import axios from "axios";

class App extends Component {
  state = {
    inventory: "",
    products: ""
  };

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    const inventoryPromise = axios("/inventory");
    const productsPromise  = axios("/products");
    const [inventory, products] = await Promise.all([inventoryPromise, productsPromise]);
    this.setState({ inventory: inventory.data.message, products: products.data.message });
  };

  render() {
    return (
      <Styled.Wrapper>
        <Styled.Table>
          <a href="/inventory">
            <h1>Current Inventory</h1>
          </a>
          <h3>{this.state.inventory}</h3>
        </Styled.Table>
        <Styled.Table>
          <a href="/products">
            <h1>Current Products</h1>
          </a>
          <h3>{this.state.products}</h3>
        </Styled.Table>
      </Styled.Wrapper>
    );
  }
}

export default App;
