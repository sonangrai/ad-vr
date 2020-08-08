import { projectStorage } from ".././firebase/config";

export const upload = (file) => {
  const storageRef = projectStorage.ref(file.name);
  storageRef.put(file).on(
    "state_changed",
    (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      console.log(percentage);
    },
    (err) => {
      //setError(err);
    },
    async () => {
      const url = await storageRef.getDownloadURL();
      console.log(url);
    }
  );
};
