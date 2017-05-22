import React, {Component} from "react";

import Hero from './Hero';
import SocialProof from "./SocialProof";
import What from './What';
import PressProof from 'components/landing/PressProof';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
import Footer from "components/Footer";

export default class Contributor extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <SocialProof/>
                <What/>
                <PressProof/>
                <NotReadyToJoin role="contributor"/>
                <Footer/>
            </div>
        );
    }
}