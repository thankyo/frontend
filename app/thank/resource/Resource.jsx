import React, {Component} from "react";
import ComponentWrap from "components/ComponentWrap";
import Verification from "./Verification";
import OwnedResources from "./OwnedResources";


export default class Resource extends Component {
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