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
  const myEntriesContext = useContext<MyContextType>(RevenueContext);

  window.onscroll = _.debounce(async () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop ===
      document.documentElement.clientHeight
    ) {
      const { data } = await getPosts(page);
      myEntriesContext.setState({
        ...myEntriesContext.state,
        data: {
          count: data.count,
          next_cursor: data.next_cursor,
          results: {
            all: [
              ...myEntriesContext.state.data.results.all,
              ...data.results.all
            ]
          }
        }
      });
    }
  }, 100);

  return (
    <li className={`item`}>
      <span className="day">
        {ds} <br />
        Overall
      </span>
      <span className="amount">${y}</span>
    </li>
  );
};
