import React, { Component } from "react";

import Navigation   from '../components/Navigation';
import Footer       from '../components/Footer';

import Profile      from '../components/user/Profile';
import Payment       from '../components/user/Payment';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="column is-one-third">
                    <Profile id="me"/>
                </div>
                <div className="column">
                    <Payment id="me"/>
                </div>
                <Footer/>
            </div>
        );
    }
}