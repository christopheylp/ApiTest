import './App.css';
import Nav from './Nav';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/cjs/Button";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Form } from 'react-bootstrap';


class App extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        }, ()=> console.log(this.state.userInput));
    }

    addUser(event){
        event.preventDefault(); //reload pas la page

        this.setState({
            userInput: this.state.userInput
        });
        console.log(this.state.userInput) ;
    }

    render() {
        const myStyle = {
            padding: "10px",
        };
        return (
            <div>
                <Form>
                    <Form.Control
                        style={myStyle}
                        placeholder="Saisissez votre prénom"
                        onChange={this.onChange.bind(this)}
                    />
                    <Router>
                        <Link  style={myStyle} to="/welcome"><Button>Valider</Button></Link>
                        <Switch>
                            <Route exact path="/welcome">
                                <Nav name={this.state.userInput}/>
                            </Route>
                        </Switch>
                    </Router>
                </Form>
            </div>
        );
    }
}

export default App;
