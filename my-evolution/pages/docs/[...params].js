import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        viewing the docs for feature {params[0]} concept is {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return (
        <h1>viewing Doc of feature {params[0]}</h1>
    ) 
  }
  return <h1>Docs Home Page</h1>
}
