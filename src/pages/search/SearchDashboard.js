import React from "react";
import OGTile from "./OGTile.jsx";
import NoResults from "./NoResults.jsx";
import { connect } from 'react-redux';

function SearchDashboard({ search }) {
  if (search.length === 0) {
    return <NoResults/>
  }

  return (
    <div className="container">
      {search.map((post, i) => <OGTile key={i} {...post}/>)}
    </div>
  )
}

const mapStateToProps = ({ search }) => ({ search });

export default connect(mapStateToProps)(SearchDashboard);