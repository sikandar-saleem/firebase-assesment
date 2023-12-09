import useUsers from "../hooks/useUsers";

import { Link } from "react-router-dom";

export default function Users() {
  const { users } = useUsers();

  return (
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Name</th>
            <th scope="col">Sectors</th>
            <th scope="col">Terms Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>
                <code>{user.sectors.join(", ")}</code>
              </td>
              <td>{user.is_agree_terms ? "Agreed" : "Not Agreed"}</td>
              <td>
                <Link to={`/users/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
