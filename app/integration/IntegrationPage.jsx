import React, {Component} from "react";
import Navigation from "components/Navigation";
import ComponentWrap from "components/ComponentWrap";
import Resource from "../thank/resource/Resource";
import JSIntegration from "./JSIntegration";
import Footer from "../components/Footer";
import PayoutAccount from './PayoutAccount'
import Icon from "../components/Icon";

class IntegrationHero extends Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p className="title">
                                    Integration
                                </p>
                                <p className="subtitle">
                                    Everything you need to <strong>integrate a website</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default class IntegrationPage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <IntegrationHero/>
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
                    <br/>
                    <br/>
                    <br/>
                    <h3 className="title is-3">3. Connect your bank account</h3>
                    <PayoutAccount/>
                    <br/>
                    <br/>
                    <br/>
                    <h3 className="title is-3 has-text-centered"><Icon fa="rocket fa-4x"/> that's it you are ready to rock.</h3>
                    <br/>
                    <h3 className="title is-5 pull-right">Did not work? <a href="mailto:antono@loveit.tips?subject=Integration problem">contact us.</a></h3>

                </ComponentWrap>
                <Footer/>
            </div>
        );
    }
}
