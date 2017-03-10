import React, {Component} from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default class Join extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="section">
                    <div className="container has-text-centered">
                        <a className="button is-primary is-large is-outlined" href="/api/auth/authenticate/facebook">
                            <span className="icon">
                                <i className="fa fa-facebook-f"></i>
                            </span>
                            <span>
                            Facebook
                            </span>
                        </a>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}