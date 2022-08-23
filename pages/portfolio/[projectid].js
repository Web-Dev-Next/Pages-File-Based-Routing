import { useRouter } from "next/router";

function PortfolioProjectPage(params) {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <h1>Portfolio Project Page</h1>;
}

export default PortfolioProjectPage;
