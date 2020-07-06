import React, { Component } from 'react';
import axios from "axios";
import 'tui-image-editor/dist/tui-image-editor.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Editor from './Editor.js'
// import ImageEditor from '@toast-ui/react-image-editor'
// const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

class Search extends Component {
    constructor() {
        super()
        this.state = {
          query: '',
          images:[],
          querySubmit:"",
          imageChosen:""
        };
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.query === "") {
            toast.error('No input detected 🤯🤯🤯', {
                    position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                className: 'toast-alert',
            });
        } else {
            this.setState({
                querySubmit: this.state.query
            })
            if (this.state.userInput !== "") {
                this.setState({
                    query: ''
                }, () => this.performSearch())
            }
        }
    }
    
    performSearch =() => {
        axios({
            method: "GET",
            url: `https://api.unsplash.com/search/photos`,
            params: {
                client_id: `yF191mMX1BOr1RZhtWzXK7e6mPRcKr930GQ9UxhkvJ4`,
                query: this.state.querySubmit,
            },
        }).then((results) => {
            console.log(results)
            this.setState({
                images: results.data.results,
                imageChosen: "",
            });
        });
    }

    handleUserInput = (event) => {
        this.setState({
            query: event.target.value,
        })
    }
    handleImageClick = (event) => {
        event.preventDefault();
        this.setState({
            imageChosen: event.target.src
        })
        
    }

  render() {
    return (
        <div className="wrapper">
            <div>
              <form action="" onSubmit={this.handleSubmit}>
                  <label htmlFor="queryName" className="visuallyHidden">enter query:</label>
                  <input type="text" id="queryName" name="queryName" placeholder="OVER here!" value={this.state.userInput}
                      onChange={this.handleUserInput} />
                  <button type="submit" id="queryButton" aria-label="submit search">?</button>
              </form>
            </div>
        {this.state.imageChosen == "" ?
        <div className="imageGrid">
        {this.state.images.map((image) => {
                return (
                    <div className="imageContainer">
                        <img
                            onClick={this.handleImageClick}
                            key={`${image.id}`}
                            id={`${image.id}`}
                            src={`${image.urls.regular}`}
                            alt={`${image.alt_description}`}
                        />
                    </div>
                )
            })}
        </div>
        :
        // <div classname="imageChosen">
        //     <img className="chosen" src={this.state.imageChosen}></img>
        // </div>
        <Editor image={this.state.imageChosen} />
        }
      </div>
    )
  }
}

export default Search;