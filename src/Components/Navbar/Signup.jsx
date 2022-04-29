import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirmPassword] = useState();

    let navigate = useNavigate();

    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    

    const registerUser = (data) => {
        if(name.length === 0 || email.length === 0 || 
           phone.length === 0 || password.length === 0 ||
           confirm.length === 0){

            alert("Please fill all fields")
        }else{
            fetch("https://royal-brothers-json.herokuapp.com/user",
            {
            method: "POST",
            headers:
              { "Content-Type": "application/json" },
                body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                password: password,
                confirm: confirm,
            })
          });
    
        alert("login successful");
        window.location.href = "/login";
        }
        
      }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" required
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <TextField fullWidth label='Email' placeholder="Enter your email" required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" required 
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <TextField fullWidth label='Password' type='password' placeholder="Enter your password" required
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <TextField fullWidth label='Confirm Password' type='password' placeholder="Confirm your password" required
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'
                        onClick={registerUser}
                    >Sign up
                    </Button>
                    {/* <Button type='submit' variant='contained' color='primary'
                        // onClick={() => {
                        //     navigate("/login");
                        // }} 
                    >Sign up
                    </Button> */}
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;