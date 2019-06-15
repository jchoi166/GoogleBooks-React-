import React, {Component} from 'react'
import API from '../utils/API'
import axios from 'axios';
import CustomNav from '../components/CustomNav'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Link} from 'react-router-dom'

const styles = {
    navbar: {
        width: '50%',
    },
    
   
}

class Search extends Component {
    state = {
        title: '',
        movieObj: [],
        saveMovie: {}
    }

    componentDidMount () {
        
    }

    handleChange = event => {
        this.setState({title: event.target.value})
    }

    formatTitle = event => {
        event.preventDefault()
        let originalString = this.state.title
        let newString = originalString.replace(/ /gi, "+")
        this.setState({title: newString})
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newString}`)
            .then(r => {
                console.log(r.data.items)
                this.setState({movieObj: r.data.items})
            })
            .catch(e => console.log(e))
        // fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
        //     .then(r => console.log(r))
        //     .catch(e => console.log(e))
        // this.setState({movieObj: r.data.items})
        // console.log(this.state.movieObj)
    }

    setBook = event => {
        let bookArray = this.state.movieObj
        let findIndex = bookArray.findIndex(obj => obj.id === event.target.value)
        let oneBook = bookArray[findIndex]
        // console.log(oneBook)
        let newSave = {
            title: oneBook.volumeInfo.title,
            author: oneBook.volumeInfo.authors ? oneBook.volumeInfo.authors[0] : 'No Author!',
            description: oneBook.volumeInfo.description,
            imageURL: oneBook.volumeInfo.imageLinks.thumbnail,
            link: oneBook.selfLink,
            saved: true
        }
        API.saveBook(newSave)
            // .then(r => console.log('it Worked!'))
        // console.log(bookArray[findIndex])
        // this.setState({saveMovie: bookArray[findIndex]})

    }

    render() {

        const { classes } = this.props;

        return (
            <div style ={{margin: '50px'}}>
            <CustomNav/>
                <Grid container>
                    <Grid item>
                        <form onSubmit= {this.formatTitle}>
                            <input value= {this.state.title} onChange = {this.handleChange} type='text' />
                            <button>Press Me</button>
                        </form>
                        <p>{this.state.title}</p>
                        <div style={{width: '70%'}}>
                            <ul style={{padding: '0px'}}>
                                {this.state.movieObj.map((book) => 
                                    <div key={book.id}>
                                        <a href={`${book.selfLink}`} target='_blank'>{book.volumeInfo.title}</a>
                                        <div style={{display:'flex'}}>
                                            <img src={book.volumeInfo.imageLinks.thumbnail}></img>
                                            <span>
                                            <br/>
                                                Author:{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No Author!'}
                                            <br/>
                                                Description:{book.volumeInfo.description}
                                            <br/>
                                                Link:{book.selfLink}
                                            <br/>
                                            </span>
                                        </div>
                                        <button value={book.id} onClick={this.setBook}>Save Movie</button>
                                    </div>
                                )}
                                </ul>
                            </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Search);
