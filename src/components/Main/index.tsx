import React, { useContext } from "react";
import Hero from "../Hero/index";
import PostList from "../PostList/index";
import { RevenueContext } from "../../store/Revenue/index";

export default () => {
  const { state: posts }: any = useContext(RevenueContext);

  return (
    <main>
      <Hero />
      <PostList data={posts.data} />
    </main>
  );
};
