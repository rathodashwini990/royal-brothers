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
import "./Payment.css";

const Payment = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    let amountCart = useSelector((state) => state.cart)
    console.log("statecart: ",amountCart);

  return (
    <div className="contaniner">
        {
        amountCart.map((e) => {
            let temp = e.img;
            console.log(e);
            return ( <>
               
              <Card variant='outlined' sx={{ minWidth: 275 }} 
                style={{
                  width: 800,
                  height: 480, 
                  marginLeft: 100, 
                  marginTop: 100,
              }}>
                <Card variant='outlined' sx={{ minWidth: 275 }} 
                  style={{
                    width: 800,
                    height: 20, 
                    marginLeft: 0, 
                    marginTop: 10,
                }}>
                <CardActionArea>
                <CardContent style={{width: 250,marginLeft: 7}}>
                  <Typography variant='h6' color="text.secondary" gutterBottom
                    style={{marginLeft: -80, marginTop: 0}}
                  >
                      CHOOSE PAYMENT METHOD
                    </Typography> 
                  <br /><br /><br /><br />
                  <img 
                    style={{paddingTop: '10%'}} src={temp} alt="" 
                  />
                </CardContent>
                </CardActionArea> 
                </Card>

                <Card variant='outlined' sx={{ minWidth: 275 }} 
                  style={{
                    width: 800,
                    height: 480, 
                    marginLeft: 100, 
                    marginTop: 100,
                    display: "flex"
                }}>
                  
                <Card  sx={{ minWidth: 275 }} style={{width: 300, marginLeft: 0, marginTop: 10}}>
                  <CardActionArea>
                
                  <CardContent style={{width: 250,marginLeft: 7}}>
                  <Typography variant='h5' color="text.secondary" gutterBottom
                    style={{marginLeft: -80, marginTop: 0}}
                  >
                      CHOOSE PAYMENT METHOD
                    </Typography> 
                    <br /><br /><br /><br />
                    <img 
                      style={{paddingTop: '10%'}} src={temp} alt="" 
                    />
                  </CardContent>

                  </CardActionArea> 
                </Card>

                </Card>


              
                <Card variant='outlined' sx={{ minWidth: 275 }} 
                  style={{
                    width: 350, 
                    height: 200,
                    marginLeft: 20, 
                    marginTop: 100,
                    display: "flex",
                    // flex-wrap: "wrap",
                }}>

                  <Card  sx={{ minWidth: 275 }} style={{width: 350, marginLeft: 0, marginTop: 10}}>
                  <CardActionArea>
                  <CardContent style={{width: 400,marginLeft: 7, marginTop: 0}}>
                    <Typography variant='h5' color="text.secondary" gutterBottom
                      style={{marginLeft: -80, marginTop: 0}}
                    >
                      SUMMARY
                    </Typography> 
                    <Typography variant='h6' color="text.secondary" gutterBottom
                      style={{marginLeft: -80, marginTop: 0}}
                    >
                      Total Payable Amount - {e.price}
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
                    >Make Payment
                    </Button>
                  </CardActions>
                  </CardActionArea>
                  </Card>
                </Card>
              </Card> 
              </>
            );
        })}
    </div>
  )
}

export default Payment

{/* <Card variant='outlined' sx={{ minWidth: 275 }} 
                style={{
                  width: 800,
                  height: 480, 
                  marginLeft: 100, 
                  marginTop: 100,
                  display: "flex",
                  // flex-wrap: "wrap",
              }}>
                <Card  sx={{ minWidth: 275 }} style={{width: 300, marginLeft: 0, marginTop: 10}}>
                
                <CardActionArea>
               
                <CardContent style={{width: 250,marginLeft: 7}}>
                <Typography variant='h6' color="text.secondary" gutterBottom
                  style={{marginLeft: -80, marginTop: 0}}
                >
                    CHOOSE PAYMENT METHOD
                  </Typography> 
                  <br /><br /><br /><br />
                  <img 
                    style={{paddingTop: '10%'}} src={temp} alt="" 
                  />
                </CardContent>

                </CardActionArea> 
                </Card>

                <Card  sx={{ minWidth: 275 }} style={{width: 300, marginLeft: 0, marginTop: 10}}>
                <CardActionArea>
               
                <CardContent style={{width: 250,marginLeft: 7}}>
                <Typography variant='h5' color="text.secondary" gutterBottom
                  style={{marginLeft: -80, marginTop: 0}}
                >
                    CHOOSE PAYMENT METHOD
                  </Typography> 
                  <br /><br /><br /><br />
                  <img 
                    style={{paddingTop: '10%'}} src={temp} alt="" 
                  />
                </CardContent>

                </CardActionArea> 
                </Card>
                
              </Card>

              
              <Card variant='outlined' sx={{ minWidth: 275 }} 
                style={{
                  width: 350, 
                  height: 200,
                  marginLeft: 20, 
                  marginTop: 100,
                  display: "flex",
                  // flex-wrap: "wrap",
              }}>

                <Card  sx={{ minWidth: 275 }} style={{width: 350, marginLeft: 0, marginTop: 10}}>
                {/* <Grid item key={e.id}> */}
              //   <CardActionArea>
              //   <CardContent style={{width: 400,marginLeft: 7, marginTop: 0}}>
              //     <Typography variant='h5' color="text.secondary" gutterBottom
              //       style={{marginLeft: -80, marginTop: 0}}
              //     >
              //       SUMMARY
              //     </Typography> 
              //     <Typography variant='h6' color="text.secondary" gutterBottom
              //       style={{marginLeft: -80, marginTop: 0}}
              //     >
              //       Total Payable Amount - {e.price}
              //     </Typography>
              //   </CardContent>
              //   <CardActions>
              //     <Button size="medium" variant="contained"
              //       style={{marginLeft: 100}}
              //       onClick={() => 
              //         {
              //           dispatch(addCart(e)); navigate("/success")
              //         }
              //       }
              //     >Make Payment
              //     </Button>
              //   </CardActions>
              //   </CardActionArea>
              //   </Card>
              // </Card>  */}