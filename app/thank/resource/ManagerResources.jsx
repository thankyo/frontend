import React, {Component} from "react";
import Verification from "./Verification";
import OwnedResources from "./OwnedResources";


export default class ManagedResources extends Component {
    render() {
        return (
            <div>
                <OwnedResources id={this.props.id}/>
                <hr/>
                <Verification id={this.props.id}/>
            </div>
        );
    }
}