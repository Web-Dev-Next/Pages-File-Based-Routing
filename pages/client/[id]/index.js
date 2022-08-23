import { useRouter } from "next/router";

function SpecificClientPage(params) {
  const router = useRouter();
  console.log(router.query);

  const onLoadProjectHandler = () => {
    //...Load Data of the project
    router.push({
      pathname: "/client/[id]/[projectid]",
      query: { id: "user0", projectid: "project00" },
    }); //<<< push page on top of existing page, we can able to take back.

    // router.replace({
    //   pathname: "/client/[id]/[projectid]",
    //   query: { id: "user0", projectid: "project00" },
    // }); //<<< this will replace existing page, we CAN NOT able to take back.
  };

  return (
    <div>
      <h1>Specific Client Page</h1>
      <button onClick={onLoadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default SpecificClientPage;
