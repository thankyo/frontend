import React, {Component} from "react";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Creator from "../components/landing/Creator";
import Contributor from "../components/landing/Contributor";
import HowItWorks from "../components/landing/HowItWorks";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Creator/>
                {/*<Contributor/>*/}
                <div className="section main">
                    {/*<div className="container">*/}
                        {/*<div className="columns">*/}
                            {/*<div className="column is-4">*/}
                                {/*<div className="panel">*/}
                                    {/*<Creator/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="column is-4">*/}
                                {/*<div className="panel">*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="column is-4">*/}
                                {/*<div className="panel">*/}
                                    {/*<HowItWorks/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
                <Footer/>
            </div>
        );
    }
}