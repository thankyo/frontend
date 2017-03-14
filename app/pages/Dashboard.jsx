import React, { Component } from "react";

import Navigation   from '../components/Navigation';
import Footer       from '../components/Footer';

import Profile      from '../components/user/Profile';
import Thanks       from '../components/user/Thanks';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="column is-one-third">
                    <Profile id="me"/>
                </div>
                <div className="column is-two-third">
                    <Thanks id="me"/>
                </div>
                <Footer/>
            </div>
        );
    }
}