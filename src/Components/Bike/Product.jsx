

import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {storeData, addCart} from "../../Redux/action";
import { useNavigate } from 'react-router-dom';
import "./Product.css";

const Product = () => {
  //const [data, setData] = useState([]);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://royal-brothers-json.herokuapp.com/tariff")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    .catch((err) => console.log(err))
  }, [])

  const result = useSelector((state) => state.data);
  //console.log(result);

  return (
    <div className="contaniner">
        {
        result.map((e) => {
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
                      {dispatch(addCart(e)); navigate("/book")}}>Book</button>
              {/* onClick={() => {
                    navigate("/search");
                  }}  */}
              </div>
            );
        })}
    </div>
   )
}

export default Product