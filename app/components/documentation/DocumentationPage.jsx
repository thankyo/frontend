import React, { Component } from "react";

import Navigation from "components/Navigation";
import DocumentationMenu from "./Menu";
import Overview from "./Overview";

export default class Documentation extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <DocumentationMenu/>
                <Overview/>
            </div>
        );
    }
}