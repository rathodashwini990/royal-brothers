import { 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addCart} from "../../Redux/action";
import { useNavigate } from 'react-router-dom';

import "./Payment.css";

const Payment = () => {

    // Card States
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    const dispatch = useDispatch();
    let navigate = useNavigate();

    let amountCart = useSelector((state) => state.cart)
    console.log("statecart: ",amountCart);

  return (
    <div className="contaniner">
        {
        amountCart.map((e) => {
            // let temp = e.img;
            // console.log(e);
            return ( <>
               
              <Card variant='outlined' sx={{ minWidth: 275 }} 
                style={{
                  width: 900,
                  height: 480, 
                  marginLeft: 100, 
                  marginTop: 100,
              }}>
                <Card variant='outlined' sx={{ minWidth: 275 }} 
                  style={{
                    width: 900,
                    height: 30, 
                    marginLeft: 0, 
                    marginTop: 10,
                }}>
                  <Typography variant='h6' color="text.secondary" gutterBottom
                    style={{marginLeft: -80, marginTop: 0}}
                  >
                      CHOOSE PAYMENT METHOD
                    </Typography> 
                </Card>

                <Card variant='outlined' sx={{ minWidth: 275 }} 
                  style={{
                    // border: "1px solid black",
                    width: 900,
                    height: 400, 
                    marginLeft: 0, 
                    marginTop: 10,
                    display: "flex",
                    
                }}>
                  
                <Card sx={{ minWidth: 275 }} style={{width: 250, height: 250, marginLeft: 0, marginTop: 10}}>
                    <CardActionArea>
                    <CardContent style={{width: 200 ,marginLeft: 7}}>
                    <Typography variant='h6' color="text.secondary" gutterBottom
                      style={{marginLeft: -30, marginTop: 0 ,border: "1px solid whitesmoke"}}
                    >
                      Credit Card
                    </Typography> 
                    <Typography variant='h6' color="text.secondary" gutterBottom
                      style={{marginLeft: -30, marginTop: 0 ,border: "1px solid whitesmoke"}}
                    >
                        Debit Card
                    </Typography>

                    <Typography variant='h6' color="text.secondary" gutterBottom
                      style={{marginLeft: -30, marginTop: 0 ,border: "1px solid whitesmoke"}}
                    >
                        Net Banking
                    </Typography>
                    <Typography variant='h6' color="text.secondary" gutterBottom
                      style={{marginLeft: -30, marginTop: 0 ,border: "1px solid whitesmoke"}}
                    >
                        UPI Payment
                      </Typography>
                    
                    </CardContent>
                    </CardActionArea> 
                </Card>

                {/* Credit Card Start */}
                <Card variant='outlined' style={{width: "80%", height: 380, marginTop: 10}}>
                  <div className='input'>
                  <Cards 
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                  />
                    <form>
                    <br /> <label>Card Number: </label>
                      <input 
                        type='tel'
                        name='number'
                        placeholder='Card Number'
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                        required
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <label>Name: </label> 
                      <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                        required
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
                      <label>Expiry Date: </label>
                      <input 
                        type='text'
                        name='expiry'
                        placeholder='MM/YY Expiry'
                        value={expiry}
                        onChange={e => setExpiry(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                        required
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <label>CVC: </label>
                      <input 
                        type='password'
                        name='cvc'
                        placeholder='CVC'
                        value={cvc}
                        onChange={e => setCvc(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                        required
                      /> <br /><br /><br />
                    </form>
                    </div>
                    <CardActions>
                    <Button size="medium" variant="contained"
                      style={{marginLeft: 250}}
                      onClick={() => 
                        {
                          dispatch(addCart(e)); 
                          if(number.length === 0 || name.length === 0 || 
                             expiry.length === 0 || cvc.length === 0 ){
                              alert("Please fill all fields")
                              navigate("/checkout")
                          }else{
                            navigate("/success")
                          }
                          
                        }
                      }
                    >Make Payment
                    </Button>
                  </CardActions>
                </Card>
                {/* Credit Card End */}

                </Card>
              </Card> 

              <Card variant='outlined' sx={{ minWidth: 275 }} 
                  style={{
                    width: 350,
                    height: 150,
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
                  </CardActionArea>
                  </Card>
              </Card>
              </>
            );
        })}
    </div>
  )
}

export default Payment