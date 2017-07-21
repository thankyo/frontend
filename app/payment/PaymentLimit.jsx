import React from "react";
import {decrease, getLimit, increase, setLimit} from "reducers/payment/limit.actions";
import {connect} from "react-redux";

const LimitPage = ({limit, setLimit, increase, decrease}) => {
    let cups = limit.amount / 5;
    return (
        <div className="hero is-narrow">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title is-3">What is your monthly limit?</h3>
                            <h3 className="title is-3 is-success">
                                <span><b>{cups}</b></span>
                                <span> cup{cups > 1 && "s"} of coffee</span></h3>
                            <h5 className="subtitle is-5 is-success">
                                <b>{limit.amount}.0 {limit.currency}</b></h5>
                            <div className="title is-4 has-addons is-grouped">
                                <a onClick={increase}
                                   className="button is-large is-success is-inverted"><span>+ more</span></a>
                                <a onClick={decrease} className="button is-large is-danger is-inverted"
                                   disabled={cups == 1}><span>- less</span></a>
                            </div>
                            <h5 className="subtitle is-5">we'll <b className="is-danger">never</b> charge you more, than
                                that</h5>
                            <a className="button is-info is-inverted is-large pull-right"
                               onClick={() => setLimit(limit)}>Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = ({payment: {limit}}) => {
    return {limit};
};

const mapDispatchToProps = (dispatch) => {
    dispatch(getLimit());
    return {
        setLimit: (limit) => {
            dispatch(setLimit(limit));
        },
        increase: () => {
            dispatch(increase());
        },
        decrease: () => {
            dispatch(decrease());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LimitPage);



