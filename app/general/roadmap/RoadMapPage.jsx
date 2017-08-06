import React, { Component } from "react";

import Hero from "./Hero";
import Navigation from '../../navigation/Navigation';
import RoadMapItem from "./RoadMapItem";
import Footer from "../../navigation/Footer";

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