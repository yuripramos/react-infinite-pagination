import React, { useContext, Fragment } from "react";
import "./styles.scss";
import _ from "lodash";
import moment from "moment";
import formatNumber from "../../utils/currency";
import { RevenueContext } from "../../store/Revenue/index";
import { isToday } from "../../utils/date";
import { getEntries } from "../../services/api";

type Entry = {
  data: any;
  page: number;
};

type MyContextType = {
  state?: any;
  setState?: (data: object) => void;
};

export default ({ data: { ds, y }, page }: Entry) => {
  const myEntriesContext = useContext<MyContextType>(RevenueContext);

  window.onscroll = _.debounce(async () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop ===
      document.documentElement.clientHeight
    ) {
      const { data } = await getEntries(page);

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
  }, 200);

  return (
    <li className={`item`}>
      <span className={isToday(ds) ? "today day" : "day"}>
        {isToday(ds) ? (
          <Fragment>Today</Fragment>
        ) : (
          <Fragment>{moment(ds).format("LL")}</Fragment>
        )}{" "}
        <br />
        <span className="category">Overall</span>
      </span>
      <span className="amount">${formatNumber(y)}</span>
    </li>
  );
};
