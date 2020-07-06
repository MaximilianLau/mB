import React, { Component } from 'react';
import axios from "axios";
import 'tui-image-editor/dist/tui-image-editor.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Editor from './Editor.js'

// const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

class Search extends Component {
    constructor() {
        super()
        this.state = {
          query: "",
          images:[],
          querySubmit:"",
          imageChosen:"",
          imageQuality:""
        };
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.query === "") {
            toast.error('No input detected ⌨ 🪓', {
                position: "bottom-center",
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
                query: this.state.querySubmit
            },
        }).then((results) => {
            console.log(results)
            if (results.data.total === 0) {
                toast.error('No results found for your query', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    className: 'toast-alert',
                });
            }
            else {
            this.setState({
                images: results.data.results,
                imageChosen: "",
            });
            }
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
    photoQualityRegular = () => {
        this.setState({
            imageQuality:"regular"
        })
        toast.error('Image quality changed to Regular😌', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            className: 'toast-alert',
        });
    }
    photoQualityFull = () => {
        this.setState({
            imageQuality:"full"
        })
        toast.error('Image quality changed to Full! Gonna be HUGE!🤪', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            className: 'toast-alert',
        });
    }

  render() {
    return (
        <div className="wrapper">
            <div>
              <p className="qualityText">Change Picture Quality (Default is Regular)</p>
                <div>
                    <button className="qualityButton" onClick={this.photoQualityFull}>Full</button>
                    <button className="qualityButton" onClick={this.photoQualityRegular}>Regular/Default</button>
                </div>
              <form action="" onSubmit={this.handleSubmit}>
                  <label htmlFor="queryName" className="visuallyHidden">enter query:</label>
                  <input type="text" id="queryName" name="queryName" placeholder="Search for an image to edit!" value={this.state.userInput}
                      onChange={this.handleUserInput} />
                  <button type="submit" id="queryButton" aria-label="submit search">?</button>
              </form>
            </div>
            <ToastContainer />
        {this.state.imageChosen !== "" ?
                <Editor image={this.state.imageChosen} />
                : (this.state.imageQuality === "full") ?
                <div className="imageGrid">
                {this.state.images.map((image) => {
                    return (
                        <div className="imageContainer">
                            <img
                                onClick={this.handleImageClick}
                                key={`${image.id}`}
                                id={`${image.id}`}
                                src={`${image.urls.full}`}
                                alt={`${image.alt_description}`}
                            />
                        </div>
                    )
                })}
            </div>
            :
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
            }
      </div>
    )
  }
}

export default Search;