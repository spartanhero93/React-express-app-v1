import React from 'react'
import styled from 'styled-components';
import {Wrapper} from "../Styles/index";

const Inventory = props =>
  props.isLoaded === false ? <h1>Loading...</h1>: 
  <div>{props.inventory.map((item, index) => <Items key={index} item={item} />)}</div>

const Items = props => {
  return (
    <Wrapper>
      <div>Name: {props.item.name}</div>
      <div>Price: ${props.item.price}</div>
      <div>Quantity: {props.item.inventory}</div>
    </Wrapper>
  )
}

//<==== Styling ====>//
const Box = styled.div`
`;

export default Inventory;