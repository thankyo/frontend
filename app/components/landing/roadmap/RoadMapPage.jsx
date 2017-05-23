import React, { Component } from "react";

import Hero from "./Hero";
import Navigation from 'components/Navigation';
import RoadMapItem from "./RoadMapItem";
import Footer from "components/Footer";

export default class RoadMapPage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Hero/>
                <RoadMapItem/>
                <Footer/>
            </div>
        );
    }
}