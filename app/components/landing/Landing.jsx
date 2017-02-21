import React, {Component} from "react";

import Hero from "./Hero";
import Creator from "./Creator";
import Contributor from "./Contributor";
import HowItWorks from "./HowItWorks";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Creator/>
                <Contributor/>
                <HowItWorks/>
            </div>
        );
    }
}