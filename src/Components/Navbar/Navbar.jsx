import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.app}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}>
            <img src="https://www.kindpng.com/picc/m/600-6000026_royal-brothers-logo-hd-png-download.png" alt="logo" className={classes.logo} />
          </Typography>
          <Typography className={classes.title}>
            Tariff
          </Typography>
          <Typography className={classes.title}>
            What's new?
          </Typography>
          <Typography className={classes.title}>
            Careers
          </Typography>
          <Typography color="black" className={classes.title}>
            Partener with us
          </Typography>
          <Button className={classes.btn1}>Location</Button>
          <Button className={classes.btn}>Login</Button>
          <Button className={classes.btn}>Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
