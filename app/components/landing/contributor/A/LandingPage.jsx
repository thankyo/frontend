import React, {Component} from "react";

import Hero from 'components/landing/Hero';
import Proofs from 'components/landing/Proofs';
import HowItWorks from "../HowItWorks";
import Idea from "../Idea";
import Simple from "../Simple";
import Join from "../../Join";
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
                <Proofs
                    proofs={["YouTube", "Dribbble", "Medium"]}
                    subtitle="Soon every place on the web (NOT YET)"
                />
                <Simple/>
                <Join
                    image="contributor/default/Hero.jpg"
                    title="Fuel creators"
                    subtitle="A dime, that counts"
                    button="Join"
                />
                <NotReadyToJoin role="contributor"/>
                <Footer/>
            </div>
        );
    }
}