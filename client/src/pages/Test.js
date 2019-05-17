import React from 'react'
import Navbar from '../components/Navbar/'
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      height: 180,
      backgroundColor: 'yellow',
    },
    paper: {
      // margin: theme.spacing.unit,
      height: '100%',
      backgroundColor: 'red',
      zIndex: 2,
      position: 'absolute',
      width: "100%"

    },

    noPaper: {
      zIndex: 0
    },

    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  
    
  });


class Test extends React.Component{
    state = {
        checked: true,
        title: '',
      };


      handleChange = () => {
        this.setState(state => ({ checked: !state.checked }));
      };

      handleTitleChange = event => {
        this.setState({title: event.target.value})
    
      }

      collapse = (event) => {
        event.preventDefault()
        this.setState({ checked: false });
      }
      
      checkFade = (check) => {
        console.log(check)
        this.setState({ checked: true });
      }
    render(){

        const { classes } = this.props;
        const { checked } = this.state;
    
        
        return(
            <>
            
                <Navbar/>
                  <Fade in={checked} timeout={1000}>
                    <Paper className={checked? classes.paper: classes.noPaper} >
                     
                      Hello
                      THere
                      <form onSubmit= {this.collapse} >
                        <input value= {this.state.title} onChange = {this.handleTitleChange} type='text' />
                        <button>Press Me</button>
                      </form>
                    </Paper>
                </Fade>
           
            </>
        )
    }
}

Test.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Test);
  