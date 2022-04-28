// import React,{ useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {storeData, addCart} from "../../Redux/action";
// import { useNavigate } from 'react-router-dom';
// import "./Product.css";

// const Product = () => {
//   //const [data, setData] = useState([]);

//   const dispatch = useDispatch();
//   let navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://royal-brothers-json.herokuapp.com/tariff")
//     .then((res) => res.json())
//     .then((res) => dispatch(storeData(res)))
//     .catch((err) => console.log(err))
//   }, [])

//   const result = useSelector((state) => state.data);
//   //console.log(result);

//   return (
//     <div className="contaniner">
//         {
//         result.map((e) => {
//             let temp = e.img;
//             console.log(e);
//             return (
//               <div className="image_container">
//                     <h3>{e.name}</h3>
//                     <img className="images" src={temp} alt="" />
//                     <h4>Booking Time - {e.booktime} : 00</h4>
//                     <h4>Kilometer - {e.kmlimit}</h4>
//                     <h4>ExKm - {e.exkm}</h4>
//                     <h4>Booking Price - {e.price}</h4>
//                     <button 
//                       onClick={() => 
//                       {dispatch(addCart(e)); navigate("/book")}}>Book</button>
//               </div>
//             );
//         })}
//     </div>
//    )
// }

// export default Product

import { 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  Typography } from '@material-ui/core';
import Button from '@mui/material/Button';

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
              <Card variant='outlined' sx={{ minWidth: 275 }} style={{width: 300, marginLeft: 50, marginTop: 100}}>
                {/* <Grid item key={e.id}> */}
                <CardActionArea>
                <CardContent style={{width: 250,marginLeft: 7}}>
                  <Typography variant='h5' color="text.secondary" gutterBottom>
                    {e.name}
                  </Typography>
                
                <img 
                  style={{paddingTop: '10%'}} src={temp} alt="" 
                />
                               
                  <Typography variant='h6' color="text.secondary" gutterBottom style={{paddingTop: '10%'}}>
                    Booking Time - {e.booktime} : 00
                  </Typography>
                  <Typography variant='h6' color="text.secondary" gutterBottom>
                    Kilometer - {e.kmlimit}
                  </Typography>
                  <Typography variant='h6' color="text.secondary" gutterBottom>
                    ExKm - {e.exkm}
                  </Typography>
                  <Typography variant='h6' color="text.secondary" gutterBottom>
                    Booking Price - {e.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" variant="contained"
                    style={{marginLeft: 100}}
                    onClick={() => 
                      {
                        dispatch(addCart(e)); navigate("/book")
                      }
                    }
                  >Book
                  </Button>
                </CardActions>
                </CardActionArea>
              </Card>
            );
        })}
    </div>
   )
}

export default Product