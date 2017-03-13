import React, {Component} from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { login } from "../../reducers/auth.actions";

import { connect } from "react-redux";




const Join = ({ loginFacebook }) => {
        return (
            <div>
                <Navigation/>
                <div className="section">
                    <div className="container has-text-centered">
                        <div className="button is-primary" onClick={loginFacebook}>
                            <span className="icon">
                                <i className="fa fa-facebook-f"></i>
                            </span>
                            <span> Facebook</span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        loginFacebook: () => dispatch(login("facebook"))
    }
};

export default connect(null, mapDispatchToProps)(Join)