import firebase from "firebase";
import * as types from "../reducers/types";
import { setalert } from "./alert";
import Axios from "axios";

export const login = () => async (dispatch) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: token,
      });
      dispatch(loaduser());
      dispatch(setalert("Successfully Logged In", "success"));
    })
    .catch(function (error) {
      dispatch({
        type: types.LOGIN_FAIL,
      });
    });
};

export const loaduser = () => async (dispatch) => {
  try {
    var access_token = localStorage.token;
    const res = await Axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );
    dispatch({
      type: types.USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: types.AUTH_ERROR,
    });
  }
};

export const logout = () => async (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      dispatch({
        type: types.LOGOUT,
      });
      dispatch(loaduser());
      dispatch(setalert("Successfully Logged Out", "success"));
    })
    .catch(function (error) {
      // An error happened.
    });
};
