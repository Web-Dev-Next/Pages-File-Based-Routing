import { useRouter } from "next/router";

function ClientProjectPage(params) {
  const router = useRouter();
  console.log(router.query);
  return <h1>Client Project Page</h1>
}

export default ClientProjectPage;
