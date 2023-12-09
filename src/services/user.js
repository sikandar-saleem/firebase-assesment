import { db } from "../configs/firebase";

import { updateDoc } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const usersDocs = collection(db, "users");

class UserService {
  async createUser(user) {
    await addDoc(usersDocs, user);
  }

  async updateUser(userDoc, user) {
    await updateDoc(userDoc, user);
  }
}

export default new UserService();
