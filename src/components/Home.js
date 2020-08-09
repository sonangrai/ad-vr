import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./css/main.css";
import "./css/home.css";

import { getdata } from "../actions/ads";
import Model from "./Ads/Model";

const Home = ({ auth, getdata, ads }) => {
  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <Fragment>
      <div className="home container">
        <div className="row">
          {auth.isAuthenticated === true && ads !== null ? (
            <Fragment>
              {ads.map((ad) =>
                ad.uid === auth.user.sub ? (
                  <div
                    className="col-lg-4"
                    key={ad.id}
                    data-toggle="modal"
                    data-target={`#` + ad.id}
                  >
                    <div className="aditem">
                      <img src={ad.imgurl} alt={ad.id} />
                      <span>{ad.title}</span>
                      <p>{ad.description}</p>
                      <Model data={ad} target={ad.id} />
                    </div>
                  </div>
                ) : null
              )}
              <div className="col-12">
                <Link to="/addads" className="btn">
                  Add Ads
                </Link>
              </div>
            </Fragment>
          ) : (
            <div className="col-12">
              <div className="lginf">
                <span>Login To add Ads</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  ads: state.ads.ads,
});
export default connect(mapStateToProps, { getdata })(Home);
