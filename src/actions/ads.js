import { projectFirestore } from ".././firebase/config";
import * as types from "../reducers/types";

export const pushdata = async (data) => {
  const collectionRef = projectFirestore.collection("adtbl");
  try {
    await collectionRef.add(data);
  } catch (error) {}
};

export const getdata = () => async (dispatch) => {
  try {
    const unsub = projectFirestore.collection("adtbl").onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      dispatch({
        type: types.ADS_FETCH,
        payload: documents,
      });
    });

    return () => unsub();
  } catch (error) {
    dispatch({
      type: types.ADS_ADD_FAIL,
    });
  }
};
