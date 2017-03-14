import React, { Component } from "react";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import PrivacyPolicy from '../components/legal/PrivacyPolicy';

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