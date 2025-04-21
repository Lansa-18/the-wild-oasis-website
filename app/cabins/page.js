import Counter from "../components/Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
  return (
    <h1>
      Cabins Page
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={data} />
    </h1>
  );
}
