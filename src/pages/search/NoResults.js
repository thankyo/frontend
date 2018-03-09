import React from "react";
import { connect } from "react-redux";

function NoResults({ query }) {
  return (
    <div className="container">
      <h1 className="title is-6">Noooooo, Results for "{query}"</h1>
      <h2 className="subtitle is-6">Keep digging</h2>
    </div>
  )
}

const mapStateToProps = ({ navigation: { query } }) => ({ query });

export default connect(mapStateToProps)(NoResults)