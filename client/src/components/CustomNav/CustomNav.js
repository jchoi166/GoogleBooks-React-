import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'right',
    // color: theme.palette.text.secondary,
  
  },
  div: {
    paddingLeft: '50px'
  },
  title: {
    fontWeight: 'Bold',
    fontFamily: 'Georgia',
    fontSize: '43px'
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontFamily: 'Arial'
  }
});

function CustomNav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    
      <Grid container spacing={8} >
        <Grid item xs>
          <Link to = '/' style = {{color:'black',textDecoration:'none'}}>
            <div className = {classes.title}>
            <img src="https://www.pngkey.com/png/full/130-1304595_cartoon-cats-png-animated-black-cat-gif.png" style={{height: '50px'}}></img>
              Catalog
            </div>
          </Link>
        </Grid>
        <Grid item xs>
          {/* <div>Hello</div> */}
          <ul className = {classes.list}>
            <li>EXPLORE</li>
            <Link to = '/' style = {{color:'black',textDecoration:'none'}}>
              <li>SEARCH</li>
            </Link>
            <Link to = '/saved' style = {{color:'black',textDecoration:'none'}}>
              <li>SAVED</li>
            </Link>
          </ul>
        </Grid>
      </Grid>
    
    </div>
  );
}

CustomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomNav);