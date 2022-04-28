// import React,{ useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {addCart} from "../../Redux/action";
// import { useNavigate } from 'react-router-dom';
// import "./BikeDetails.css";

// const BikeDetails = () => {

//     const dispatch = useDispatch();
//     let navigate = useNavigate();

//     let stateCart = useSelector((state) => state.cart)
//     console.log("statecart: ",stateCart);

//   return (
//     <div className="contaniner">
//         {
//         stateCart.map((e) => {
//             let temp = e.img;
//             console.log(e);
//             return (
//               <div className="image_container">
//                     <img className="images" src={temp} alt="" />
//                     <h4>{e.name}</h4>
//                     <h4>{e.booktime}</h4>
//                     <h4>{e.kmlimit}</h4>
//                     <h4>{e.exkm}</h4>
//                     <h4>{e.price}</h4>
//                     <button 
//                       onClick={() => 
//                       {dispatch(addCart(e)); navigate("/checkout")}}>Checkout</button>
//               </div>
//             );
//         })}
//     </div>
//   )
// }

// export default BikeDetails

import { 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  Typography } from '@material-ui/core';
import Button from '@mui/material/Button';

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
            return ( <>
              <Card variant='outlined' sx={{ minWidth: 275 }} 
                style={{
                  width: 800, 
                  marginLeft: 100, 
                  marginTop: 100,
                  display: "flex",
                  // flex-wrap: "wrap",
              }}>
                <Card  sx={{ minWidth: 275 }} style={{width: 300, marginLeft: 0, marginTop: 10}}>
                {/* <Grid item key={e.id}> */}
                <CardActionArea>
               
                <CardContent style={{width: 250,marginLeft: 7}}>
                <Typography variant='h5' color="text.secondary" gutterBottom
                  style={{marginLeft: -80, marginTop: 0}}
                >
                    SUMMARY
                  </Typography> 
                  <br /><br /><br /><br />
                  <img 
                    style={{paddingTop: '10%'}} src={temp} alt="" 
                  />
                </CardContent>

                <CardContent style={{width: 250,marginLeft: 7}}>
                  <Typography variant='h5' color="text.secondary" gutterBottom>
                    {e.name}
                  </Typography>
                </CardContent>

                </CardActionArea> 
                </Card>

                <Card  sx={{ minWidth: 275 }} style={{width: 500, marginLeft: 0, marginTop: 10}}>
                {/* <Grid item key={e.id}> */}
                <CardActionArea>
                <CardContent style={{width: 400,marginLeft: 7, marginTop: 0}}>
                               
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
                  <input placeholder='Coupon Code'
                     style={{
                       marginLeft: 120,
                       borderTop: "1px solid white",
                       borderLeft: "1px solid white",
                       borderRight: "1px solid white",
                       borderBottom: "1px solid grey"
                    }}
                  />
                  <Button size="medium" variant="contained"
                    style={{marginLeft: 20}}
                    onClick={() => 
                      {
                        dispatch(addCart(e)); navigate("/checkout")
                      }
                    }
                  >Apply
                  </Button>
                </CardActions>
                </CardActionArea>
                </Card>
              </Card>

              <Card variant='outlined' sx={{ minWidth: 275 }} 
                style={{
                  width: 350, 
                  height: 160,
                  marginLeft: 20, 
                  marginTop: 100,
                  display: "flex",
                  // flex-wrap: "wrap",
              }}>

                <Card  sx={{ minWidth: 275 }} style={{width: 350, marginLeft: 0, marginTop: 10}}>
                {/* <Grid item key={e.id}> */}
                <CardActionArea>
                <CardContent style={{width: 400,marginLeft: 7, marginTop: 0}}>
                   
                  <Typography variant='h6' color="text.secondary" gutterBottom
                    style={{marginLeft: -80, marginTop: 0}}
                  >
                    Booking Price - {e.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" variant="contained"
                    style={{marginLeft: 100}}
                    onClick={() => 
                      {
                        dispatch(addCart(e)); navigate("/checkout")
                      }
                    }
                  >Make Payment
                  </Button>
                </CardActions>
                </CardActionArea>
                </Card>
              </Card>
              </>
            );
        })}
    </div>
  )
}

export default BikeDetails