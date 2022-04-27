import React from 'react'
import { useSelector } from 'react-redux'

const BikeDetails = () => {

    let stateCart = useSelector((state) => state.cart)
    console.log("statecart: ",stateCart);


  return (
    <div>BikeDetails</div>
  )
}

export default BikeDetails