import React, { Component } from "react";
import { Link } from 'react-router';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Thank project</strong> <Link to="/legal/terms">Terms of Use</Link>
                        </p>
                    </div>
                </div>
            </footer>
        );
    };
};