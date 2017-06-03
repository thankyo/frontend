import React, {Component} from "react";
import Navigation from "components/Navigation";
import ComponentWrap from "components/ComponentWrap";
import AddVerification  from './AddVerification';
import Verifications from './Verifications';
import OwnedResources from './OwnedResources';


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <h4 className="title is-4">Resources</h4>
                    <OwnedResources id={this.props.params.id}/>
                    <h4 className="title is-4">Add Resource</h4>
                    <AddVerification id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <Verifications id={this.props.params.id}/>
                </ComponentWrap>
            </div>
        );
    }
}