import React, {Component} from "react";
import Navigation from "components/Navigation";
import ComponentWrap from "components/ComponentWrap";
import Verification from './Verification';
import OwnedResources from './OwnedResources';


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <h4 className="title is-4">Resources</h4>
                    <OwnedResources id={this.props.params.id}/>
                    <hr/>
                    <h4 className="title is-4">Verify</h4>
                    <Verification id={this.props.params.id}/>
                </ComponentWrap>
            </div>
        );
    }
}