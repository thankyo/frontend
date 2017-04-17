import React, { Component } from "react";
import { Link } from 'react-router';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <Link to="/legal/terms">Terms of Use</Link>{" & "}<Link to="/legal/privacy">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </footer>
        );
    };
};