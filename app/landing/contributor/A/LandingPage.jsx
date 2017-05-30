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
                <Payment/>
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