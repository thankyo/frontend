import React, {Component} from "react";

import Hero from './Hero';
import Proofs from 'components/landing/Proofs';
import What from './What';
import NotReadyToJoin from 'components/landing/NotReadyToJoin';
import Footer from "components/Footer";

export default class Contributor extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Proofs
                    proofs={["Tesla", "Ghandi", "Picaso"]}
                    subtitle="Could be our first users"
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