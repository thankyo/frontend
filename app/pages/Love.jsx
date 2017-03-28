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
                <section>
                    <div className="container profile">
                        <Profile id={this.props.params.id}/>
                        <ProfileMenu/>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <Thank/>
                    </div>
                </section>
                <br/>
                <section>
                    <div className="container">
                        <div className="box">
                            <ThankTransaction id={this.props.params.id}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}