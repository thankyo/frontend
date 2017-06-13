import React, {Component} from "react";
import { Link } from 'react-router';
import { setLimit } from 'reducers/payment/limit.actions';

export default class LimitPage extends Component {
    constructor() {
        super();
        this.state = {cups: 1, amount: 5, lessEnabled: true};

        this.setLimit = this.setLimit.bind(this);
        this.handleClickLess = this.handleClickLess.bind(this);
        this.handleClickMore = this.handleClickMore.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    setLimit(cups) {
        if (cups > 0)
            this.setState({cups, amount: cups * 5, lessEnabled: cups <= 1})
    }

    handleClickMore() {
        this.setLimit(this.state.cups + 1)
    }

    handleClickLess() {
        this.setLimit(this.state.cups - 1)
    }

    handleNext() {

    }

    render() {
        return (
            <div className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered has-text-centered">
                            <div className="column is-4 is-offset-4">
                                <h3 className="title is-3">What is your monthly limit?</h3>
                                <h3 className="title is-3 is-success">
                                    <span><b>{this.state.cups}</b></span>
                                    <span> cup{this.state.cups > 1 && "s"} of coffee</span></h3>
                                <h5 className="subtitle is-5 is-success"><b>{this.state.amount}.0 $</b></h5>
                                <div className="title is-4 has-addons is-grouped">
                                    <a onClick={this.handleClickMore}
                                       className="button is-large is-success is-inverted"><span>+ more</span></a>
                                    <a onClick={this.handleClickLess} className="button is-large is-danger is-inverted"
                                       disabled={this.state.lessEnabled}><span>- less</span></a>
                                </div>
                                <h5 className="subtitle is-5">we'll <b className="is-danger">never</b> charge you more, than that</h5>
                                <Link className="button is-info is-inverted is-large pull-right" to="/my/payment/charge">next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

