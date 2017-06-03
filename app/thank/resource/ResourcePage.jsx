import React, {Component} from "react";
import Navigation from "components/Navigation";
import ComponentWrap from "components/ComponentWrap";
import AddVerification  from './AddVerification';
import Verifications from './Verifications';
import ResourceOwnership from './ResourceOwnership';


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <AddVerification id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <Verifications id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <ResourceOwnership id={this.props.params.id}/>
                </ComponentWrap>
            </div>
        );
    }
}