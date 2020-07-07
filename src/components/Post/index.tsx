import React, { useContext, useState } from "react";
import "./styles.scss";
import _ from "lodash";
import { RevenueContext } from "../../store/Revenue/index";
import { getPosts } from "../../services/api";

type Post = {
  data: any;
  page: number;
};

type MyContextType = {
  state?: any;
  setState?: (data: object) => void;
};

export default ({ data: { ds, y }, page }: Post) => {
  const myPostContext = useContext<MyContextType>(RevenueContext);

  window.onscroll = _.debounce(async () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop ===
      document.documentElement.clientHeight
    ) {
      const { data } = await getPosts(page);
      myPostContext.setState({
        ...myPostContext.state,
        data: {
          data: _.flatten([myPostContext.state.data.data, data.data])
        }
      });
      console.log("log context", myPostContext);
    }
  }, 100);

  return (
    <li className={`item`}>
      {ds}
      <span>$:</span>
      {y}
    </li>
  );
};
