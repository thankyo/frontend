import React, {Component} from "react";

import Hero from "landing/Hero";
import What from 'landing/creator/What';
import Proofs from 'landing/Proofs';
import NotReadyToJoin from 'landing/NotReadyToJoin';
import Footer from "components/Footer";

export default class CreatorPage extends Component {
    render() {
        return (
            <div>
                <Hero
                    image="creator/default/Hero.jpg"
                    title="Fund your passion"
                    subtitle="Microtip revolution"
                    button="Just try it"
                />
                <Proofs
                    proofs={["YouTube", "Dribbble", "Medium"]}
                    subtitle="Our future clients (don't tell them yet)"
                />
                <What/>
                <Proofs
                    proofs={["NYT", "Mashable", "Tech Crunch"]}
                    subtitle="Have no idea we exist (YET)"
                />
                <NotReadyToJoin role="creator"/>
                <Footer/>
            </div>
        );
    }
}
