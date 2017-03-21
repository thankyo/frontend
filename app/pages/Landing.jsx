import React, {Component} from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Hero from "../components/landing/Hero";
import Creator from "../components/landing/Creator";
import Contributor from "../components/landing/Contributor";
import HowItWorks from "../components/landing/HowItWorks";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Hero/>
                <Creator/>
                <Contributor/>
                <HowItWorks/>
                <Footer/>
            </div>
        );
    }
}