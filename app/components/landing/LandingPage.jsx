import React, {Component} from "react";

import Hero from "./Hero";

import Creator from "./Creator";
import Contributor from "./Contributor";
import HowItWorks from "./HowItWorks";
import Contact from "../Contact";

import Footer from "../Footer";

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Contributor/>
                <Creator/>
                <HowItWorks/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}
