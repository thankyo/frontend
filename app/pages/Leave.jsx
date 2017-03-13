import React from "react";
import {connect} from "react-redux";

import Navigation   from '../components/Navigation';
import Footer       from '../components/Footer';

import {logout}     from '../reducers/auth.actions';

const Leave = ({leave}) => {
    return (
        <div>
            <Navigation/>
            <div className="section has-text-centered">
                <h1>Goodbye and thank you for the fish</h1>
                <button className="button is-primary" onClick={leave}>Leave</button>
            </div>
            <Footer/>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        leave: () => dispatch(logout())
    }
};

export default connect(
    undefined,
    mapDispatchToProps
)(Leave);