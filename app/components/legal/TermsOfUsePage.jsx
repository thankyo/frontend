import React, {Component} from "react";

import Navigation from '../Navigation';
import Footer from '../Footer';
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

