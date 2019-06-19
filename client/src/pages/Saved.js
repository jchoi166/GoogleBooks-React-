import React, {Component} from 'react'
import API from '../utils/API'
import CustomNav from '../components/CustomNav'

class Saved extends Component {
    state = {
        savedBooks: []
    }
    
    componentWillMount () {
        API.getBooks()
            .then(r => this.setState({savedBooks: r.data}))
    }

    deleteBook = (event) => {
        API.deleteBook(event.target.value)
            .then(_ => {
                API.getBooks()
                    .then(r => this.setState({savedBooks: r.data}))
            })
    }

    render() {

        
        return (
            <div style ={{margin: '50px'}}>
            <CustomNav/>
            <h2>Here are your saved books:</h2>
            {this.state.savedBooks.map(book => 
                <div key={book._id}>
                    <img src={book.imageURL} alt= {book.imageURL}></img>
                    <p>
                    Title: {book.title} 
                    <br/>
                    Author:{book.author}
                    <br/>
                    Description:{book.description}
                    <br/>
                    Link:{book.link}
                    <br/>
                    </p>
                    <button value= {book._id} onClick= {this.deleteBook}>Delete Book</button>
                    </div>
            )}
            </div>
        )
    }
}

export default Saved