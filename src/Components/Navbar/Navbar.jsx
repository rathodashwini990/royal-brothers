import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  logo: {
    flexGrow: 0.1,
    height: "42px",
    width: "80%"
  },
  title: {
    flexGrow: 0.1,
    color: "black",
    fontSize: "18px"
  },
  btn: {
    // flexGrow: 0.1,
    color: "black",
    fontSize: "16px"
  },
  btn1: {
    flexGrow: 0.6,
    color: "black",
    fontSize: "16px"
  },
}));

export default function Navbar() {
  const classes = useStyles();

  let navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.app}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}>
            <img src="https://www.kindpng.com/picc/m/600-6000026_royal-brothers-logo-hd-png-download.png" 
              alt="logo" 
              className={classes.logo} 
              onClick={() => {
                navigate("/");
              }}  
            />
          </Typography>
          <Typography className={classes.title}>
            <Button  
              onClick={() => {
                navigate("/search");
              }} 
                className={classes.btn}> Tariff
            </Button>
            {/* Tariff */}
          </Typography>
          <Typography className={classes.title}>
            <Button  
              onClick={() => {
                navigate("/");
              }} 
                className={classes.btn}> What's new?
            </Button>
            {/* What's new? */}
          </Typography>
          <Typography className={classes.title}>
            <Button  
              onClick={() => {
                navigate("/");
              }} 
                className={classes.btn}> Careers
            </Button>
            {/* Careers */}
          </Typography>
          <Typography color="black" className={classes.title}>
            <Button  
                onClick={() => {
                navigate("/");
              }} 
                className={classes.btn}> Partener with us
            </Button>
            {/* Partener with us */}
          </Typography>
            <Button className={classes.btn1}>Location</Button>

            <Button  
                onClick={() => {
                navigate("/login");
              }} 
                className={classes.btn}> Login
            </Button>

            <Button  
                onClick={() => {
                navigate("/login");
              }} 
                className={classes.btn}> Signup
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}