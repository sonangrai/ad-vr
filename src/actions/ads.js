import { projectFirestore } from ".././firebase/config";

export const pushdata = async (data) => {
  const collectionRef = projectFirestore.collection("adtbl");
  try {
    await collectionRef.add(data);
  } catch (error) {}
};
