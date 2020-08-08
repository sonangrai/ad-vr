import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import "../css/main.css";
import "../css/addads.css";
import Login from "../Login";
import { projectStorage } from "../../firebase/config";
import { pushdata } from "../../actions/ads";

const AddAds = ({ auth }) => {
  const [fdata, setfdata] = useState({
    uid: "",
    imgurl: "",
    description: "",
    title: "",
  });
  const [img, setimg] = useState(null);
  const [percent, setpercent] = useState("0");
  const { imgurl, description, title } = fdata;
  const types = ["image/png", "image/jpeg"];

  const onChange = (e) => {
    setfdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setfdata({ ...fdata, uid: auth.user.sub });
    setimg({ ...img, [e.target.name]: e.target.files[0] });
  };

  const onFileupload = (e) => {
    let selected = img.adImage;
    if (selected && types.includes(selected.type)) {
      const storageRef = projectStorage.ref(selected.name);
      storageRef.put(selected).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setpercent(percentage);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setfdata({ ...fdata, imgurl: url });
        }
      );
    }
  };

  const submitAd = (e) => {
    e.preventDefault();
    pushdata(fdata);
    console.log(fdata);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {auth.isAuthenticated === true ? (
            <Fragment>
              {imgurl !== "" && (
                <img className="upimg" src={imgurl} alt={imgurl} />
              )}
              <form onSubmit={submitAd}>
                <div className="form-group">
                  <label htmlFor="title">Image:</label>
                  <input
                    type="file"
                    className="form-control"
                    name="adImage"
                    onChange={onFileChange}
                    placeholder="Image of the Ad"
                  />
                  {img !== null && (
                    <button className="btn" onClick={onFileupload}>
                      Upload Image
                    </button>
                  )}
                </div>

                <div className="form-group">
                  <div
                    className="loader"
                    style={{ width: percent + "%" }}
                  ></div>
                </div>

                <div className="form-group">
                  <label htmlFor="title">Image Url:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="imgurl"
                    placeholder={imgurl}
                    readOnly
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
            </Fragment>
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
