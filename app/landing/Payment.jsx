import React, {Component} from "react";
import Wrap from "./Wrap";

const CreatorExamples = () => (
    <section className="subtitle">
        <span className="hand-written">Example</span><br/>
        You've received 1'000 tips during a month<br/>
        1'000 tips is 100$ - 10$ for processing<br/>
        90$ end in your account
    </section>
);

class CreatorFees extends Component {
    render() {
        return (
            <div className="has-text-left">
                <h2 className="title is-2 hand-written">Creator payouts and fees</h2>
                <section className="subtitle">
                    The service is <b>free for creators.</b><br/>
                    We simply collect a <b>10% fee from successful transactions</b> for processing.<br/>
                    <br/>
                    <b>The payout is once a month.</b><br/>
                </section>
                {this.props.showExample && <CreatorExamples/>}
            </div>
        )
    }
}

const SupporterExamples = () => (
    <section className="subtitle">
        <span className="hand-written">Examples</span><br/>
        You've set a <b>limit of 10$ a month</b><br/>
        <b>Under a limit of expenses</b><br/>
        You've sent 100 tips during a month<br/>
        100 tips is 10$ + 30c <br/>
        10$ 30c is a total charge<br/>
        <b>Over a limit</b><br/>
        You were extra grateful and sent 200 tips during a<br/>
        We'll charge you for 100 tips and transfer the rest to the next month<br/>
        100 tips is 10$ + 30c processing<br/>
        10$ 30c is a total charge end of month
    </section>
);

class SupporterFees extends Component {
    render() {
        return (
            <div className="has-text-left">
                <h2 className="title is-2 hand-written">Supporter payments and fees</h2>
                <section className="subtitle">
                    We track your support throughout the month and charge you total at the end of the month + 30 cents for processing.
                    <br/>
                    <br/>
                    <b>You are in full control of how much you spend.</b><br/>
                    Set a limit per month and we won't charge you more, than that.<br/>
                </section>
                {this.props.showExample && <SupporterExamples/>}
            </div>
        )
    }
}

export default class Payment extends Component {
    constructor(){
        super();

        this.state = { showExample: false };
    }
    render() {
        return (
            <Wrap>
                <h1 className="title is-1 hand-written">Payments</h1>
                <CreatorFees showExample={this.state.showExample}/>
                <br/>
                <SupporterFees showExample={this.state.showExample}/>
                <br/>
                <h4 className="title is-4" onClick={() => this.setState({ showExample: !this.state.showExample })}><a>How about an example?</a></h4>
            </Wrap>
        )
    }
}