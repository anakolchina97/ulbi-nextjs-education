import Link from "next/link";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ivan" },
    { id: 2, name: "Igor" },
  ]);
  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/users/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
