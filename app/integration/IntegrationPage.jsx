import React, {Component} from "react";
import Navigation from "components/Navigation";
import ComponentWrap from "components/ComponentWrap";
import Resource from "../thank/resource/Resource";
import JSIntegration from "./JSIntegration";

export default class IntegrationPage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <h3 className="title is-3">1. Resource ownership</h3>
                    <div className="subtitle is-5">
                        Before starting integration you need to verify resource ownership.
                    </div>
                    <Resource id={this.props.params.id}/>
                    <br/>
                    <br/>
                    <br/>
                    <h3 className="title is-3">2. LoveIt button integration</h3>
                    <h4 className="subtitle is-5">After verifying resource you can integrate it to your site</h4>
                    <JSIntegration/>
                </ComponentWrap>
            </div>
        );
    }
}
