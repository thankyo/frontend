import React, {Component} from "react";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TermsOfUse from '../components/legal/TermsOfUse';


export default class TermsOfUsePage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <TermsOfUse/>
                <Footer/>
            </div>
        )
    }
};

