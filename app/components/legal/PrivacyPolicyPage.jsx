import React, { Component } from "react";

import Navigation from '../Navigation';
import Footer from '../Footer';

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