import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProfileMenu from "../components/ProfileMenu";
import ThankTransaction from "../components/ThankTransaction";
import Thank from "../components/Thank";


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container profile">
                    <Profile id={this.props.params.id}/>
                    <ProfileMenu/>
                </div>

                <div className="container">
                    <div className="box">
                        <Thank/>
                    </div>
                </div>

                <br/>

                <div className="container">
                    <div className="box">
                        <ThankTransaction id={this.props.params.id}/>
                    </div>
                </div>

            </div>
        );
    }
}