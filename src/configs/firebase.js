import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Move this to ENV
const firebaseConfig = {
  apiKey: "AIzaSyDQXR6aTRio85lRF6_oiM694LDSHSQqRYM",
  authDomain: "fir-assesment-bd992.firebaseapp.com",
  projectId: "fir-assesment-bd992",
  storageBucket: "fir-assesment-bd992.appspot.com",
  messagingSenderId: "955680673543",
  appId: "1:955680673543:web:8a72e06058c876ec65bfa2",
  measurementId: "G-NFHPFBSW07",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
