import React from "react";
import { connect } from "react-redux";
import "../css/alert.css";

const Alert = ({ alert }) =>
  alert !== null &&
  alert.length > 0 &&
  alert.map((alert) => (
    <div className="alertmodel">
      <h2>{alert.msg}</h2>
    </div>
  ));

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
