import React, {Component} from "react";

import Hero from 'components/landing/Hero';
import Proofs from 'components/landing/Proofs';
import What from 'components/landing/contributor/What';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
import Footer from "components/Footer";
import HowItWorks from "../HowItWorks";
import Idea from '../Idea';

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
                <What/>
                <Proofs
                    proofs={["NYT", "Mashable", "Tech Crunch"]}
                    subtitle="Have no idea we exist (YET)"
                />
                <NotReadyToJoin role="contributor"/>
                <Footer/>
            </div>
        );
    }
}