import React, { useState, useEffect } from "react";

import Post from "../Post/index";
import NoContent from "../NoContent/index";

const getKey = (page: any) => {
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

  console.log("data => ", data);
  console.log("entries", entries.results && entries.results.all);

  const hasEntries =
    entries && entries.results && entries.results.all.length > 0;

  return (
    <section data-testid="postlist-section" className="list">
      {hasEntries ? (
        <ul className="posts">
          {entries.results.all.map((entry: any) => (
            <Post
              key={getKey(entry.count)}
              data={entry}
              page={parseInt(entries.next_cursor)}
            />
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};
