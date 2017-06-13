import React, {Component} from "react";
import { setLimit } from 'reducers/payment/limit.actions';
import {connect}            from "react-redux";

class LimitPage extends Component {
    constructor() {
        super();

        this.toState = this.toState.bind(this);
        this.handleClickLess = this.handleClickLess.bind(this);
        this.handleClickMore = this.handleClickMore.bind(this);
        this.handleNext = this.handleNext.bind(this);

        this.state = this.toState(1);
    }
    toState(cups) {
        cups = cups == 0 ? 1 : cups;
        return {cups, limit: { amount: cups * 5, currency: 'USD' }, lessEnabled: cups <= 1};
    }
    handleClickMore() {
        this.setState(this.toState(this.state.cups + 1));
    }
    handleClickLess() {
        this.setState(this.toState(this.state.cups - 1));
    }
    handleNext() {
        this.props.setLimit(this.state.limit);
    }
    render() {
        return (
            <div className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered has-text-centered is-loading">
                            <div className="column is-4 is-offset-4">
                                <h3 className="title is-3">What is your monthly limit?</h3>
                                <h3 className="title is-3 is-success">
                                    <span><b>{this.state.cups}</b></span>
                                    <span> cup{this.state.cups > 1 && "s"} of coffee</span></h3>
                                <h5 className="subtitle is-5 is-success"><b>{this.state.limit.amount}.0 {this.state.limit.currency}</b></h5>
                                <div className="title is-4 has-addons is-grouped">
                                    <a onClick={this.handleClickMore}
                                       className="button is-large is-success is-inverted"><span>+ more</span></a>
                                    <a onClick={this.handleClickLess} className="button is-large is-danger is-inverted"
                                       disabled={this.state.lessEnabled}><span>- less</span></a>
                                </div>
                                <h5 className="subtitle is-5">we'll <b className="is-danger">never</b> charge you more, than that</h5>
                                <a className="button is-info is-inverted is-large pull-right" onClick={this.handleNext}>Next</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLimit: (limit) => {
            dispatch(setLimit(limit));
        }
    }
};

export default connect(
    undefined,
    mapDispatchToProps
)(LimitPage);



