import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import Login from "../Login";
import "../css/main.css";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = ({ logout, user }) => {
  const logoutbtn = () => {
    logout();
  };
  return (
    <Fragment>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Link to="/" className="logo">
                AD-VR
              </Link>
            </div>
            <div className="col-6">
              {user === null ? (
                <Login />
              ) : (
                <Fragment>
                  <div className="leftpart dflex fr">
                    <img
                      className="avatar"
                      src={user.picture}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                    />
                    <button className="btn logout" onClick={logoutbtn}>
                      SIgnOUT
                    </button>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { logout })(Header);
