import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addCart} from "../../Redux/action";
import { useNavigate } from 'react-router-dom';
import "./BikeDetails.css";

const BikeDetails = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    let stateCart = useSelector((state) => state.cart)
    console.log("statecart: ",stateCart);

  return (
    <div className="contaniner">
        {
        stateCart.map((e) => {
            let temp = e.img;
            console.log(e);
            return (
              <div className="image_container">
                    <img className="images" src={temp} alt="" />
                    <h4>{e.name}</h4>
                    <h4>{e.booktime}</h4>
                    <h4>{e.kmlimit}</h4>
                    <h4>{e.exkm}</h4>
                    <h4>{e.price}</h4>
                    <button 
                      onClick={() => 
                      {dispatch(addCart(e)); navigate("/checkout")}}>Checkout</button>
              </div>
            );
        })}
    </div>
  )
}

export default BikeDetails