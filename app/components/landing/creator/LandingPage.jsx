import React, {Component} from "react";

import Hero from "./Hero";
import What from './What';
import SocialProof from './SocialProof';
import PressProof from 'components/landing/PressProof';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
import Footer from "components/Footer";

export default class CreatorPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <SocialProof/>
                <What/>
                <PressProof/>
                <NotReadyToJoin role="creator"/>
                <Footer/>
            </div>
        );
    }
}
