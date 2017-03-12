import React from "react";
import {connect} from "react-redux";

import Navigation   from '../components/Navigation';
import Footer       from '../components/Footer';

import Profile      from '../components/user/Profile';


const Dashboard = () => {
    return (
        <div>
            <Navigation/>
            <Profile/>
            <Footer/>
        </div>
    );
};

const mapStateToProps = ({menu}) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);