import React, { Component } from "react";
import moment from "moment/moment";

export function asPlural(word, count) {
  return count === 1 ? word : `${word}s`
}

export function expandableComponent(ExpandedView, CollapsedView) {
  class ExpandableComponent extends Component {
    constructor(props) {
      super(props);

      this.state = { expanded: false };
    }

    handleExpand = () => {
      this.setState((state) => ({ expanded: !state.expanded }));
    };

    render() {
      let { expanded } = this.state;
      if (expanded) {
        return <ExpandedView {...this.props} handleExpand={this.handleExpand}/>
      }

      return <CollapsedView {...this.props} handleExpand={this.handleExpand}/>;
    }
  }

  return ExpandableComponent;
}

function mergeByCreationDate(transactions) {
  let mergedByDate = transactions.reduce((agg, tr) => {
    let { created } = tr;
    let dateStr = moment(created).format("MMMM Do");
    if (!agg[dateStr]) {
      agg[dateStr] = {
        dateStr,
        created,
        transactions: [tr],
        total: 1
      };
    } else {
      agg[dateStr].transactions.push(tr);
      agg[dateStr].total = agg[dateStr].total + 1;
    }
    return agg;
  }, {});

  return Object.values(mergedByDate);
}

export function mergeCharges(transactions){
  let mergedByDate = mergeByCreationDate(transactions);

  let mergedByProject = mergedByDate.map(({ created, total, dateStr, transactions }) => {
    let byProject = transactions.reduce((agg, tr) => {
      let { project, url } = tr;
      let { _id: id } = project;
      if (!agg[id]) {
        agg[id] = {
          project,
          urls: [url]
        }
      } else {
        agg[id]['urls'].push(url)
      }
      return agg;
    }, {});

    return { dateStr, created, total, projects: Object.values(byProject) }
  });
  mergedByProject.reverse();

  return mergedByProject;
}

export function mergePayouts(transactions) {
  let mergedByDate = mergeByCreationDate(transactions);

  let mergedByProject = mergedByDate.map(({ created, total, dateStr, transactions }) => {
    let byProject = transactions.reduce((agg, tr) => {
      let { project, url } = tr;
      let { _id: id } = project;
      if (!agg[id]) {
        agg[id] = {
          project,
          urls: [ { url, total: 1 }],
          total: 1
        }
      } else {
        let stat = agg[id]['urls'];
        let entry = stat.find(el => el.url === url);
        if (!entry) {
          stat.push({ url, total: 1 })
        } else {
          entry.total += 1;
        }
        agg[id].total += 1;
      }
      return agg;
    }, {});

    return { dateStr, created, total, projects: Object.values(byProject) }
  });
  mergedByProject.reverse()

  return mergedByProject;
}