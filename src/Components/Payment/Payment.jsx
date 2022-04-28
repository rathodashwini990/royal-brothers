// import React from 'react'

// const Payment = () => {
//   return (
//     <div><h1>Payment</h1></div>
//   )
// }

// export default Payment

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
  import "./Payment.css";
  
  const Payment = () => {
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
                          dispatch(addCart(e)); navigate("/success")
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
  
  export default Payment