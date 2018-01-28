import React from "react";
import OGTile from "./OGTile.jsx";
import { connect } from 'react-redux';

function SearchDashboard({ search }) {
  return (
    <div className="tile is-ancestor">
      {search.map((post, i) => <OGTile key={i} {...post}/>)}
    </div>
  )
}

const mapStateToProps = ({ search }) => ({ search });

export default connect(mapStateToProps)(SearchDashboard);