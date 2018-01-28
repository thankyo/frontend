import React from "react";
import { connect } from "react-redux";

function NoResults({ form }) {
  let value = form.search.values ? form.search.values.tags : "Unknown";
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Noooooo, Results {value && `for ${value}`}
          </h1>
          <h2 className="subtitle">
            Keep digging
          </h2>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps)(NoResults);

