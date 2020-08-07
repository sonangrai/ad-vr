import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/main.css";
import Login from "../Login";

const AddAds = ({ auth }) => {
  const [fdata, setfdata] = useState("");
  const { adImage, description, title } = fdata;

  const onChange = (e) => {
    setfdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const submitAd = (e) => {
    e.preventDefault();
    console.log(fdata);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {auth.isAuthenticated === true ? (
            <form onSubmit={submitAd}>
              <div className="form-group">
                <label htmlFor="title">Image:</label>
                <input
                  type="file"
                  className="form-control"
                  name="adImage"
                  value={adImage}
                  onChange={onChange}
                  placeholder="Image of the Ad"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={onChange}
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={onChange}
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <button type="submit " className="btn">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="danger">
              Login To Add ADs
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(AddAds);
