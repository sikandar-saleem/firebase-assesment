import { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";

import { db } from "../configs/firebase";

export default () => {
  const [sectors, setSectors] = useState([]);

  const sectorsDocs = collection(db, "sectors");

  useEffect(() => {
    (async () => {
      try {
        const data = await getDocs(sectorsDocs);
        setSectors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    })();
  }, []);

  return { sectors };
};
