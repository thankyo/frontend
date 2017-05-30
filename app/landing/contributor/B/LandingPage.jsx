import React, {Component} from "react";

import Hero from 'landing/Hero';
import HowItWorks from "../HowItWorks";
import Idea from "../Idea";
import Simple from "../Simple";
import Join from "../../Join";
import Proofs from 'landing/Proofs';
import NotReadyToJoin from 'landing/NotReadyToJoin';
import Footer from "components/Footer";

export default class Contributor extends Component {
    render() {
        return (
            <div>
                <Hero
                    image="contributor/B/Hero.jpg"
                    title="Create and prosper"
                    subtitle="Support creatives with a single click"
                    button="Change the world"
                />
                <Idea/>
                <Proofs
                    proofs={[ "Deadpool", "Yoda", "Goku"]}
                    subtitle="Would be our first users"
                />
                <HowItWorks/>
                <Proofs
                    proofs={["YouTube", "Dribbble", "Medium"]}
                    subtitle="Soon every place on the web (NOT YET)"
                />
                <Simple/>
                <Join
                    image="contributor/default/Hero.jpg"
                    title="Love and prosper"
                    subtitle="Support creatives with a single click"
                    button="Change the world"
                />
                <NotReadyToJoin role="contributor"/>
                <Footer/>
            </div>
        );
    }
}