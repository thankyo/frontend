import React, {Component} from "react";

import Hero from "./Hero";
import What from './What';
import SocialProof from './SocialProof';
import PressProof from '../PressProof';
import NotReadyToJoin from '../NotReadyToJoin';
import Footer from "../../Footer";

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
