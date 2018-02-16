import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { listTransactions } from "reducers/payment/transaction.actions";
import Resource from "components/Resource";

function contributionsStr(contributions) {
  if (contributions == 1) {
    return `${contributions} contribution`
  } else {
    return `${contributions} contributions`
  }
}


class Project extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }
  handleExpand = () => {
    this.setState(function(state) {
      return { expanded: !state.expanded };
    })
  };
  render() {
    let { project: { user, title, description, avatar, _id }, resources } = this.props;
    let { expanded } = this.state;
    if (expanded) {
      return [
        (<li key="image" className="timeline-item is-primary">
          <div className="timeline-marker is-primary is-image is-32x32">
            <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
          </div>
          <div className="timeline-content">
            <p className="heading">{contributionsStr(resources.length)}</p>
          </div>
        </li>),
        (<li key="header" className="timeline-header is-primary">
          <a><span className="tag is-primary" onClick={this.handleExpand}>{title}</span></a>
        </li>)
        ,
        (<li key="content" className="timeline-item is-primary">
          <div className="timeline-content">
            {resources.map((res, i) => <p key={i}><Resource resource={res}/></p>)}
          </div>
        </li>)
      ]
    }
    return (
      <li className="timeline-item is-primary">
        <div className="timeline-marker is-primary is-image is-32x32">
          <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
        </div>
        <div className="timeline-content">
          <p className="heading"><a onClick={this.handleExpand}>{title}</a></p>
          <p>{contributionsStr(resources.length)}</p>
          {expanded && resources.map((res, i) => <p key={i}><Resource resource={res}/></p>)}
        </div>
      </li>
    );
  }
}

function TimelineSeparator({ dateStr, onExpand }) {
  return (
    <li className="timeline-header is-primary">
      <a><span className="tag is-primary" onClick={onExpand}>{dateStr}</span></a>
    </li>
  )
}

class ThankTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  handleExpand = () => {
    this.setState(function (state) {
      return { expanded: !state.expanded };
    })
  };

  render() {
    let { expanded } = this.state;
    let { dateStr, projects, total } = this.props;
    if (expanded) {
      return [
          (<TimelineSeparator key={-1} dateStr={dateStr} onExpand={this.handleExpand}/>)
        ].
        concat(projects.map((project, i) => <Project key={i} {...project}/>))
    }
    return (
      <li>
        <div className="timeline-item is-primary">
          <div className="timeline-marker is-medium is-primary"/>
          <div className="timeline-content">
            <p className="heading">
              <a onClick={this.handleExpand}>{dateStr}</a>
            </p>
            <p>{total} contributions - in {projects.length} project{projects.length != 1 ? "s" : ""}</p>
          </div>
        </div>
      </li>
    );
  }
}

const ThankTransactions = ({ transactions }) => {
  return (
    <div>
      <h1 className="subtitle">Contributions</h1>
      <ul className="timeline">
        {transactions.map((transaction, i) => <ThankTransaction key={i} {...transaction}/>)}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ payment: { transaction } }, { id }) => {
  let transactions = transaction[id] ? transaction[id] : [];
  return { transactions };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(listTransactions(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankTransactions);