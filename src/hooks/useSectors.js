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
        const modifiedParentSectors = transformSectors(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setSectors([...modifiedParentSectors]);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    })();
  }, []);

  const transformSectors = (sectorsCollection) => {
    const modifiedParentSectors = sectorsCollection
      .map((sector) =>
        sector.parentSector === null ? { ...sector, sectors: [] } : null
      )
      .filter(Boolean);

    const childSectors = sectorsCollection.filter(
      (sector) => sector.parentSector !== null
    );

    childSectors.forEach((sector) => {
      const parentIndex = modifiedParentSectors.findIndex(
        (pSector) => pSector.name === sector.parentSector
      );
      modifiedParentSectors[parentIndex].sectors.push({
        id: sector.id,
        name: sector.name,
      });
    });

    return modifiedParentSectors;
  };

  return { sectors };
};
