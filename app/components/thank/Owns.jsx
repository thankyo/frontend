import React, {Component} from "react";
import Navigation from "../Navigation";
import Profile from "../user/Profile";
import ComponentWrap from "../ComponentWrap";
import AddOwnership  from './AddVerification';
import Verifications from './Verifications';
import ResourceOwnership from './ResourceOwnership';


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <Profile id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <AddOwnership/>
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