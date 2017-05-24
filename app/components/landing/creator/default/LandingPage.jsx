import React, {Component} from "react";

import Hero from "components/landing/Hero";
import What from 'components/landing/creator/What';
import Proofs from 'components/landing/Proofs';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
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
