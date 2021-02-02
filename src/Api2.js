import React, {Component} from 'react';

class Api2 extends Component{
    state = {
        post:{}
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=353966d0b59e91861ec58260f2bfb69f')
            .then((response) => {
                return response.json()
            })
            .then((result) =>{
                this.setState({post:result})
            })
        console.log(this.state.post);
    }

    render(){

        return(
            <div className="Api1">
                <h1>API Film</h1>
                <p>Title: {this.state.post.original_title}</p>
                <p>Language: {this.state.post.original_language}</p>
                <p>Release Date: {this.state.post.release_date}</p>
            </div>
        );
    }
}

export default Api2;