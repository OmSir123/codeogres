import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  let query = router.query.productName;
  return <div>ofjdpsjdfopsjdfio {query}</div>;
};

export default Index;
