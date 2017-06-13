import React, {Component} from "react";
import ComponentWrap from "components/ComponentWrap";
import Icon from "../components/Icon";

export default class LimitPage extends Component {
    render() {
        return (
            <div>
                <ComponentWrap>
                    <div className="has-text-centered">
                        <h3 className="title is-3">What is your monthly tip limit?</h3>
                        <div className="is-flex is-centered">
                            <div className="field has-addons is-grouped-centered">
                                <p className="control">
                                    <a className="button is-large">
                                        <Icon fa="coffee"/>
                                        <span>espresso</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-large">
                                        <Icon fa="coffee"/>
                                        <span>americano</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-large">
                                        <Icon fa="coffee"/>
                                        <span>capuchino</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </ComponentWrap>
            </div>
        );
    }
}

