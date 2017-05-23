import React, {Component} from "react";

import Hero from "./Hero";
import What from './What';
import Proofs from 'components/landing/Proofs';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
import Footer from "components/Footer";

export default class CreatorPage extends Component {
    render() {
        return (
            <div>
                <Hero/>
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
