import React, {Component} from "react";

import Hero from 'landing/Hero';
import Join from 'landing/Join';
import Proofs from 'landing/Proofs';
import NotReadyToJoin from 'landing/NotReadyToJoin';
import Footer from "components/Footer";
import HowItWorks from "../HowItWorks";
import Idea from '../Idea';
import Payment from "../Payment";
import Simple from "../Simple";

export default class Contributor extends Component {
    render() {
        return (
            <div>
                <Hero
                    image="contributor/default/Hero.jpg"
                    title="Drop of coffee in creators cup"
                    subtitle="Support creators with a single click"
                    button="Join"
                />
                <Idea/>
                <Proofs
                    proofs={["Tesla", "Gandhi", "Picasso"]}
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