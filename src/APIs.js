import React, {Component} from 'react';
import Api1 from "./Api1";
import Api2 from "./Api2";

class APIs extends Component{
    render(){
        return(
            <div>
                <h1>APIs</h1><hr/>
                <Api1/><hr/>
                <Api2/>
            </div>
        );
    }
}

export default APIs;