import React, {Component} from "react";

import Creator from "./Creator";
import HowItWorks from "./HowItWorks";
import Contact from "../../Contact";

import Hero from "./Hero";
import What from './What';
import SocialProof from './SocialProof';
import NotReadyToJoin from './NotReadyToJoin';
import Footer from "../../Footer";

export default class CreatorPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <SocialProof/>
                <What/>
                <NotReadyToJoin/>
                <Footer/>
            </div>
        );
    }
}
