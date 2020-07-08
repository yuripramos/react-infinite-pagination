import React, { useContext } from "react";
import Hero from "../Hero/index";
import EntryList from "../EntryList/index";
import { RevenueContext } from "../../store/Revenue/index";

export default () => {
  const { state: entries }: any = useContext(RevenueContext);

  return (
    <main>
      <Hero />
      <EntryList data={entries.data} />
    </main>
  );
};
