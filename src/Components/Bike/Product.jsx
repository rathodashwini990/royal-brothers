import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {storeData} from "../../Redux/action"

const Product = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://royal-brothers-json.herokuapp.com/tariff")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    .catch((err) => console.log(err))
  }, [])

  const data = useSelector((state) => state.data);
  console.log(data);

  return (
    <div>Product</div>
  )
}

export default Product