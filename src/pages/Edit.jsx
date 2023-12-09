import Form from "../components/Form";
import userService from "../services/user";

import { useParams, useHistory } from "react-router-dom";

import useUser from "../hooks/useUser";
import useSectors from "../hooks/useSectors";

export default function Edit() {
  const { id } = useParams();
  const history = useHistory();

  const { user, setUser, userDoc } = useUser(id);
  const { sectors } = useSectors();

  const handleSubmit = () => {
    try {
      userService.updateUser(userDoc, user);
      history.push("/users");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container border p-5">
      <Form
        user={user}
        setUser={setUser}
        onSubmit={handleSubmit}
        sectors={sectors}
        id={id}
      />
    </div>
  );
}
