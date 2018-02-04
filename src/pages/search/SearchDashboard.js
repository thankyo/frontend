import React from "react";
import OGTile from "components/Posts/OGTile";
import NoResults from "./NoResults";
import { connect } from 'react-redux';

function SearchDashboard({ tags }) {
  if (tags.length === 0) {
    return <NoResults/>
  }

  return (
    <section className="section container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {tags.map((post, i) => i % 3 === 0 && <OGTile key={i} {...post}/>)}
            </div>
          </div>
        </div>
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {tags.map((post, i) => i % 3 === 1 && <OGTile key={i} {...post}/>)}
            </div>
          </div>
        </div>
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {tags.map((post, i) => i % 3 === 2 && <OGTile key={i} {...post}/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ search: { tags } }) => ({ tags });

export default connect(mapStateToProps)(SearchDashboard);