import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <div className="home">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2>Ads List</h2>
            </div>
          </div>
          <div className="col-12">
            <Link to="/addads" className="btn">
              Add Ads
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
