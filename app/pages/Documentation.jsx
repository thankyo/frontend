import React, { Component } from "react";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default class Documentation extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="section">
                    <div className="content">
                    <h1>I'm documented</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}