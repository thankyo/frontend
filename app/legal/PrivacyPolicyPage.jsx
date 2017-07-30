import React, { Component } from "react";

import Navigation from '../navigation/Navigation';
import Footer from '../navigation/Footer';

import PrivacyPolicy from './PrivacyPolicy';

export default class PrivacyPolicyPage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <PrivacyPolicy/>
                <Footer/>
            </div>
        )
    }
};