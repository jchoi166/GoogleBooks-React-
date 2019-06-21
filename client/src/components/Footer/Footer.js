import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: '100px',
    // backgroundColor: 'grey',
    backgroundImage: "url('http://www.sclance.com/backgrounds/simple-patterns-background/simple-patterns-background_2018034.png')",
    position: 'absolute',
    width: '100%',
    // right: '0',
    bottom: '0',
    // left: '0',
    // padding: '1rem',
    color: 'white',
    // margin: '0px 20px 0px 20px',
  },
  gridItems: {
      textAlign: 'center'
  }
 
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={0}>
            <Grid item xs={12} className={classes.gridItems}>
                Catalog
            </Grid>
            <Grid item xs={4} className={classes.gridItems}>
                <ul style={{listStyle: 'none'}}>
                    <li><b>Subscriptions</b></li>
                    <li>Google Books</li>
                    <li>Sports Illustrated: SI</li>
                    <li>Barnes and Noble</li>
                </ul>
            </Grid>
            <Grid item xs={4} className={classes.gridItems}>
                ffffffff
                <i class="fab fa-facebook-square"></i>
            </Grid>
            <Grid item xs={4} className={classes.gridItems}>
                <ul style={{listStyle: 'none'}}>
                    <li><b>Company</b></li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </Grid>
        </Grid>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);