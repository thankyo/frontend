import React, {Component} from "react";

import Footer from "./Footer";
import Navigation from "./Navigation";

import Landing from "./landing/Landing";

export default class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Landing/>
                <Footer/>
            </div>
        );
    }
}