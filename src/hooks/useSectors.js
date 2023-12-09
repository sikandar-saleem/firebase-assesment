import { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";

import { db } from "../configs/firebase";

export default () => {
  const [sectors, setSectors] = useState([]);

  const sectorsDocs = collection(db, "sectors");

  useEffect(() => {
    (async () => {
      const data = await getDocs(sectorsDocs);
      setSectors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })();
  }, []);

  return { sectors };
};
