import React, {Component} from "react";

import What from 'components/landing/contributor/What';
import Hero from 'components/landing/Hero';
import Proofs from 'components/landing/Proofs';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
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
                <Proofs
                    proofs={[ "Deadpool", "Yoda", "Goku"]}
                    subtitle="Would be our first users"
                />
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