import React, {Component} from "react";

import Hero from 'components/landing/Hero';
import Proofs from 'components/landing/Proofs';

import What from 'components/landing/contributor/What';
import HowItWorks from "../HowItWorks";
import Idea from "../Idea";
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
import Footer from "components/Footer";

export default class Contributor extends Component {
    render() {
        return (
            <div>
                <Hero
                    image="contributor/A/Hero.jpg"
                    title="Drop of coffee in creators cup"
                    subtitle="Small tip, that counts"
                    button="Join"
                />
                <Idea/>
                <Proofs
                    proofs={["Tesla", "Ghandi", "Picaso"]}
                    subtitle="Could be our first users"
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