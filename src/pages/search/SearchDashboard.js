import React from "react";
import OGTile from "./OGTile.jsx";
import NoResults from "./NoResults.jsx";
import { connect } from 'react-redux';

function SearchDashboard({ search }) {
  if (search.length === 0) {
    return <NoResults/>
  }

  return (
    <section className="section container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {search.map((post, i) => i % 3 === 0 && <OGTile key={i} {...post}/>)}
            </div>
          </div>
        </div>
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {search.map((post, i) => i % 3 === 1 && <OGTile key={i} {...post}/>)}
            </div>
          </div>
        </div>
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {search.map((post, i) => i % 3 === 2 && <OGTile key={i} {...post}/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ search }) => ({ search });

export default connect(mapStateToProps)(SearchDashboard);