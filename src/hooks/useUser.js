import { useEffect, useState } from "react";

import { db } from "../configs/firebase";

import { doc, getDoc } from "firebase/firestore";

export default (id) => {
  const userDoc = doc(db, "users", id);

  const [user, setUser] = useState({
    name: "",
    sectors: [],
    is_agree_terms: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const resp = await getDoc(userDoc);
        setUser({ ...resp.data() });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    })();
  }, []);

  return { user, setUser, userDoc };
};
