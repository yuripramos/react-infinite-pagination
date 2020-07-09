import React, { useState, useEffect } from "react";
import "./styles.scss";
import Entry from "../Entry/index";
import NoContent from "../NoContent/index";
import AngleDown from "../../assets/icons/angleDown";

const getKey = (page: number) => {
  return `entry-${page}-${Math.round(Math.random() * 102134220)}`;
};

type Props = {
  data: any;
};

export default ({ data }: Props) => {
  const [entries, setEntries] = useState(data);

  useEffect(() => {
    setEntries(data);
  }, [data]);

  const hasEntries =
    entries && entries.results && entries.results.all.length > 0;

  return (
    <section data-testid="postlist-section" className="list">
      {hasEntries ? (
        <ul className="entries">
          {entries.results.all.map((entry: any) => (
            <Entry
              key={getKey(entry.count)}
              data={entry}
              page={parseInt(entries.next_cursor)}
            />
          ))}
          <div className="overlay-content" />
          <div className="image-container">
            <div className="image-wrapper">
              <AngleDown />
            </div>
          </div>
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};
