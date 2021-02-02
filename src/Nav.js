import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Welcome from "./Welcome";
import Api1 from "./Api1";
import APIs from "./APIs";
import Api2 from "./Api2";


class Nav extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Navbar expand="lg" variant="light" bg="light">
                        <ul>
                            <Navbar.Brand >
                                <Link to="/welcome">Home</Link>
                            </Navbar.Brand>
                            <Navbar.Brand >
                                <Link to="/api1">API 1</Link>
                            </Navbar.Brand>
                            <Navbar.Brand >
                                <Link to="/api2">API 2</Link>
                            </Navbar.Brand>
                            <Navbar.Brand >
                                <Link to="/apis">APIs</Link>
                            </Navbar.Brand>
                        </ul>
                    </Navbar>
                    <Switch>
                        <Route exact path="/welcome">
                            <Welcome name={this.props.name}/>
                        </Route>
                        <Route exact path="/api1">
                            <Api1/>
                        </Route>
                        <Route exact path="/api2">
                            <Api2/>
                        </Route>
                        <Route exact path="/apis">
                            <APIs/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Nav;