export default function ({ user }) {
  return (
    <div>
      <h3>Имя пользователя - {user.name}</h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.query.id}`
  );
  const user = await response.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}
