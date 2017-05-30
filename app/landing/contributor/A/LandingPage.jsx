import React, {Component} from "react";

import Hero from 'landing/Hero';
import Proofs from 'landing/Proofs';
import HowItWorks from "../HowItWorks";
import Idea from "../Idea";
import Payment from "../Payment";
import Simple from "../Simple";
import Join from "../../Join";

import NotReadyToJoin from 'landing/NotReadyToJoin';
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
                <Payment/>
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