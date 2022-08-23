import Link from "next/link";

function ClientPage(params) {
  const clients = [
    { id: "user0", name: "user-name-0" },
    { id: "user1", name: "user-name-1" },
  ];

  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/client/[id]",
                query: { id: client.id },              
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
