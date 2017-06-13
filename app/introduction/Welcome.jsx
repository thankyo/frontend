import React, {Component} from "react";
import { Link } from "react-router";
import Icon from "../components/Icon";

export default class Welcome extends Component {
    render() {
        let {firstName, thumbnail} = this.props.user;
        return (
            <section className="hero is-medium ">
                <div className="hero-body">
                    <div className="columns has-text-centered">
                        <div className="column is-3">
                        </div>
                        <div className="column is-6">
                            <h1 className="title is-1 hand-written">Welcome {firstName}!</h1>
                            <div className="sui-avatar">
                                <img src={thumbnail} alt={this.props.text} width={180} height={180}/>
                            </div>
                            <br/>
                            <Link to="my/integration" className="button is-info"><Icon fa="plug"/><span>Integration</span></Link>
                        </div>
                        <div className="column is-3">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}