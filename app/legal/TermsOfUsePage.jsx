import React, {Component} from "react";

import Navigation from '../navigation/Navigation';
import Footer from '../navigation/Footer';
import TermsOfUse from './TermsOfUse';


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

