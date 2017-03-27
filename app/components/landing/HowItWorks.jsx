import React, {Component} from "react";

export default class HowItWorks extends Component {
    render() {
        return (
            <div className="panel-block section">
                <div className="section">
                    <p className="has-text-centered"><i className="fa fa-cogs icon-block"></i></p>
                </div>
                <br/>
                <br/>
                <p>
                    Single tip is <strong>only 10 cent.</strong><br/>
                    Put <strong>10$ is 100 tips.</strong><br/>
                    Practice gratitude every day, and it would cost you a cup of coffee a month.
                </p>
                <br/>
            </div>
        );
    }
};