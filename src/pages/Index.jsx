import { useState } from "react";
import { useHistory } from "react-router-dom";
import useSectors from "../hooks/useSectors";

import Form from "../components/Form";

import userService from "../services/user";

export default function Index() {
  const [user, setUser] = useState({
    name: "",
    sectors: [],
    is_agree_terms: false,
  });

  const history = useHistory();
  const { sectors } = useSectors();

  const handleSubmit = () => {
    try {
      userService.createUser(user);
      history.push("/users");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="App container border p-5">
      <Form
        user={user}
        setUser={setUser}
        onSubmit={handleSubmit}
        sectors={sectors}
      />
    </div>
  );
}
