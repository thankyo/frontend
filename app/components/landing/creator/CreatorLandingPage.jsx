import React, {Component} from "react";

import Creator from "./Creator";
import HowItWorks from "./HowItWorks";
import Contact from "../../Contact";

import Footer from "../../Footer";

export default class CreatorPage extends Component {
    render() {
        return (
            <div>
                <Creator/>
                <HowItWorks/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}
