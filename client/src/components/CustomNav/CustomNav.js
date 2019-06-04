import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
 
});

function CustomNav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Grid container>
      <Grid container lg={6} className={classes.div}>
        <Paper className={classes.title} elevation={0}>Hello There</Paper>
      </Grid>
      <Grid container spacing={8} justify= 'flex-end' lg={6}>
        <Grid item xs={12} lg ={3}>
          <Paper className={classes.paper} elevation={0}>xs=12</Paper>
        </Grid>
        <Grid item xs={6} lg= {3}>
          <Paper className={classes.paper} elevation={0}>xs=12</Paper>          
        </Grid>
        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper} elevation={0}>xs=12</Paper>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

CustomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomNav);