import Link from "next/link";

const Users = ({ users }) => {
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

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
