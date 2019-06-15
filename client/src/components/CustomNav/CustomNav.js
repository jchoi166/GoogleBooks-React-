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
            <div className = {classes.title}>Catalog</div>
          </Link>
        </Grid>
        <Grid item xs>
          {/* <div>Hello</div> */}
          <ul className = {classes.list}>
            <Link to = '/' style = {{color:'black',textDecoration:'none'}}>
              <li>Search</li>
            </Link>
            <Link to = '/saved' style = {{color:'black',textDecoration:'none'}}>
              <li>Saved</li>
            </Link>
            <li>Jeff</li>
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