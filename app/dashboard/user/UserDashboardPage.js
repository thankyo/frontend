import React, {Component} from "react";
import Navigation from "../../components/Navigation";
import ComponentWrap from "../../components/ComponentWrap";
import Footer from "../../components/Footer";
import Invite from "../common/Invite";
import Profile from "../../components/Profile";
import ThankTransactions from "../../thank/Transaction";
import PaymentLimit from "../../payment/PaymentLimit";


class DashboardWrap extends Component {
  render() {
    return (
      <div className="tile">
        {this.props.children}
      </div>
    )
  }
}


export default class UserDashboardPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <ComponentWrap>
          <div className="columns">
            <div className="column is-one-quarter">
              <DashboardWrap>
                <Profile id={this.props.id}/>
              </DashboardWrap>
            </div>
            <div className="column is-two-quarter">
              <DashboardWrap>
                <Invite id={this.props.id}/>
              </DashboardWrap>
              <DashboardWrap>
                <ThankTransactions id={this.props.id}/>
              </DashboardWrap>
            </div>
            <div className="column is-one-quarter">
              <PaymentLimit/>
            </div>
          </div>
        </ComponentWrap>
        <Footer/>
      </div>
    );
  }
}
