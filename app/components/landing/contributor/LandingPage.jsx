import React, {Component} from "react";

import Hero from './Hero';
import SocialProof from "./SocialProof";
import What from './What';
import PressProof from '../PressProof';
import NotReadyToJoin from './NotReadyToJoin';
import Footer from "../../Footer";

export default class Contributor extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <SocialProof/>
                <What/>
                <PressProof/>
                <NotReadyToJoin/>
                <Footer/>
            </div>
        );
    }
}