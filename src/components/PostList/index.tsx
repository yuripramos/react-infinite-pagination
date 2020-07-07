import React, { useState, useEffect } from "react";

import Post from "../Post/index";
import NoContent from "../NoContent/index";

const getKey = (post: any) => {
  const { page } = post;
  return `post-${page}-${Math.round(Math.random() * 102134220)}`;
};

type Props = {
  data: any;
  disabledItems: number[];
};

export default ({ data, disabledItems }: Props) => {
  const [posts, setPosts] = useState(data.data);
  const [clickedItems, setClickedItems] = useState<number[]>(disabledItems);

  useEffect(() => {
    setPosts(data.data);
  }, [data]);

  const hasPosts = posts && posts.length > 0;

  const handleClick = (id: number) => {
    setClickedItems([...clickedItems, id]);
  };

  return (
    <section data-testid="postlist-section" className="list">
      {hasPosts ? (
        <ul className="posts">
          {posts.map((post: any) => (
            <Post
              key={getKey(data.metadata)}
              data={post}
              page={parseInt(data.metadata.page)}
              handleClick={handleClick}
              disabled={clickedItems.includes(post.absoluteIndex)}
              clickedItems={clickedItems}
            />
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};
