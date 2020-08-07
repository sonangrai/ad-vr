import React from "react";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import "./../firebase/config";
import "./css/main.css";

const Login = ({ login }) => {
  const loginbtn = () => {
    login();
  };

  return (
    <div className="fr">
      <button className="btn" onClick={loginbtn}>
        Login
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
