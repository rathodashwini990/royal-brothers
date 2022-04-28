import 'date-fns';
import React, { useState } from 'react';
import './DateTimePicker.css';

import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

function DateTimePicker() {

  //navigation
  let navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState('2017-05-24');

  const handleDateChange = (event) => {
    console.log(event.target.value);
    setSelectedDate(event.target.value);
};


  return (
    <div className="home-img" style={{ 
      backgroundImage: `url("https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page_web-986bff386c60dfaf5106b17c40f7c04228518a95dff9b04ccd88c81465cec0be.jpg")`,
      width: "100%", 
      height: "700px", 
      marginTop: "70px", 
      border: "1px solid white"
    }}>
        <div style={{
            border: "1px solid whitesmoke", 
            height: "400px", 
            width: "30%", 
            marginLeft: "120px", 
            marginTop: "120px", 
            backgroundColor: "whitesmoke"
        }}>
        <h2 style={{color: "black", marginTop: "20px"}}>Search your next ride</h2>
        <h3 style={{color: "black", marginLeft: "-180px", marginTop: "40px"}}>Pickup</h3>
        <form noValidate style={{color: "black", marginLeft: "-50px"}}>
            <TextField
                id="datetime-local"
                label="Select Date & Time"
                type="datetime-local"
                defaultValue="2022-04-24T03:30"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
        <br />
        <h3 style={{color: "black", marginLeft: "-170px"}}>Dropoff</h3>
        <form noValidate style={{color: "black", marginLeft: "-50px"}}>
            <TextField
                id="datetime-local"
                label="Select Date & Time"
                type="datetime-local"
                defaultValue="2022-04-24T06:00"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
        <br />
        <br />
            <Button variant="contained"
                onClick={() => {
                    navigate("/search");
                  }} 
            >Search
            </Button>
        </div>
    </div >
  );
}

export default DateTimePicker;

