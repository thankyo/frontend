import React, { Component } from "react";

import Footer from "../Footer";
import Navigation from "../Navigation";

export default class Documentation extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <h1>I'm documented</h1>
                <Footer/>
            </div>
        );
    }
}