import React, {Component} from "react";

import Hero from "./Hero";

import Contributor from "./Contributor";

import Footer from "../Footer";

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Contributor/>
                <Footer/>
            </div>
        );
    }
}
