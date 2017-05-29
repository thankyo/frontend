import React, {Component} from "react";

import Hero from 'components/landing/Hero';
import Join from 'components/landing/Join';
import Proofs from 'components/landing/Proofs';
import What from 'components/landing/contributor/What';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
import Footer from "components/Footer";
import HowItWorks from "../HowItWorks";
import Idea from '../Idea';
import Simple from "../Simple";

export default class Contributor extends Component {
    render() {
        return (
            <div>
                <Hero
                    image="contributor/default/Hero.jpg"
                    title="Voice of the people"
                    subtitle="Microtip revolution"
                    button="Change the world"
                />
                <Idea/>
                <Proofs
                    proofs={["Napoleon", "Lincoln", "Che"]}
                    subtitle="Would approve"
                />
                <HowItWorks/>
                <Proofs
                    proofs={["YouTube", "Dribbble", "Medium"]}
                    subtitle="Soon every place on the web (NOT YET)"
                />
                <Simple/>
                <Join
                    image="contributor/default/Hero.jpg"
                    title="Join"
                    subtitle="Microtip revolution"
                    button="Change the world"
                />
                <NotReadyToJoin role="contributor"/>
                <Footer/>
            </div>
        );
    }
}