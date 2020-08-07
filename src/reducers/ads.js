import * as types from "./types";

const initialState = {
  ads: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.ADS_ADDED:
      return {
        ...state,
        user: payload,
      };
    case types.ADS_ADD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
