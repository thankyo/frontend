import React from "react";
import { connect } from "react-redux";

function NoResults({ query }) {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Noooooo, Results for "{query}"</h1>
          <h2 className="subtitle">
            Keep digging
          </h2>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ navigation: { query }}) => ({ query });

export default connect(mapStateToProps)(NoResults)