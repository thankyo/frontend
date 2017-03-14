import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Payment from "../components/Payment";
import Thank   from '../components/Thank';


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
                                <br/>
                                <Thank/>
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