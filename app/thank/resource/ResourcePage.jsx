import React, {Component} from "react";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Resource from './Resource';
import ComponentWrap from "../../components/ComponentWrap";

export default class ResourcePage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <Resource id={this.props.params.id}/>
                </ComponentWrap>
                <Footer/>
            </div>
        );
    }
}