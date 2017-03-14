import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Profile from "../components/user/Profile";
import Payment from "../components/user/Payment";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="section">
                            <div className="content">
                                <Profile id="me"/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="section">
                            <div className="content">
                                <Payment id="me"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}