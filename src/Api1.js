import React, {Component} from 'react';



class Api1 extends Component{
    state = {
        post:{}
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&appid=7caa3a560e6382354fe33a5b64e8644e')
            .then((response) => {
                return response.json()
            })
            .then((result) =>{
                this.setState({post:result.main})
            })
    }

    render(){

        return(
            <div className="Api1">
                <h1>API météo</h1>
                <h4>Weather of Paris</h4>
                <p>Temp: {this.state.post.temp}</p>
                <p>Humidity: {this.state.post.humidity}</p>

            </div>
        );
    }
}

export default Api1;