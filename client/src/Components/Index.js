import React from 'react'
import styled from 'styled-components';
import { Wrapper, WrapperSmall } from "../Styles/index";

const Inventory = props => {
  if (props.isLoaded === false) {
    return <h1>Loading...</h1>
  } else if (props.data.length) {
    return <div>{props.data.map((item, index) => <Items key={index} item={item} />)}</div>
  } else if (props.data.name) {
    return <Items item={props.data} />
  } else {
    return <h1>Your Current Search cannot be found! Try Again</h1>
  }
}
const Items = props => {
  return (
    <WrapperSmall>
      <div>Name: {props.item.name}</div>
      <div>Price: ${props.item.price}</div>
      <div>Quantity: {props.item.inventory}</div>
    </WrapperSmall>
  )
}

export default Inventory;