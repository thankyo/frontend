import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProfileMenu from "../components/ProfileMenu";
import ThankTransaction from "../components/ThankTransaction";
import Thank            from '../components/Thank';


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container profile">
                    <Profile id={this.props.params.id}/>
                    <ProfileMenu/>
                </div>
                <div className="container profile">
                    <div className="section profile-heading">
                        <Thank/>
                    </div>
                </div>
                <div className="container profile">
                    <div className="section profile-heading">
                        <ThankTransaction id={this.props.params.id}/>
                    </div>
                </div>
            </div>
        );
    }
}