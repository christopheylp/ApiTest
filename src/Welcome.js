import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";



class Welcome extends Component{

    // constructor() {
    //     super();
    //     this.state = {
    //         count:0
    //     }
    // }
    //
    // addOne(){
    //     this.setState({
    //         count: this.state.count +1
    //     });
    // }
    //
    // removeOne(){
    //     this.setState({
    //         count: this.state.count -1
    //     });
    // }
    render(){
        const myStyle = {
            padding: "10px",
        };
        return(
            <div>
                <Container>
                    <Row>
                        <h1 style={myStyle} >Welcome {this.props.name} </h1>
                    </Row>
                    <Row>
                        <p style={myStyle}>Api 1 utilisée: <a href="https://openweathermap.org/current">https://openweathermap.org/current</a></p>
                        <Link style={myStyle} to="/api1"><Button variant="primary">Voir l'utilisation de l'API</Button></Link>
                    </Row>
                    <Row>
                        <p style={myStyle}>Api 2 utilisée: <a href="https://openweathermap.org/current">https://openweathermap.org/current</a></p>
                        <Link style={myStyle} to="/api2"><Button variant="primary">Voir l'utilisation de l'API</Button></Link>
                    </Row>
                    {/*<p>Count: {this.state.count}</p>*/}
                    {/*<button onClick={ () => this.addOne() }>Ajouter</button>*/}
                    {/*<button onClick={ this.removeOne.bind(this) }>Enlever</button>*/}
                </Container>
            </div>
        );
    }
}

export default Welcome;