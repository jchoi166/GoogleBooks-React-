import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100px',
    backgroundColor: 'grey',
    position: 'absolute',
    // width: '100%',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '1rem',
  },
 
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);