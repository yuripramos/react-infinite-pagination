import React, { useState, useEffect } from 'react';

import Post from '../Post/index';
import NoContent from '../NoContent/index';

const getKey = (post: any) => {
  const { page } = post;
  return `post-${page}-${Math.round(Math.random() * 102134220)}`;
};

type Props = {
  data: any,
  metadata: any
}

export default ({ data }: Props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("UseEffect POSTLIST");
    setPosts(data.data);
  }, [data]);

  const hasPosts = posts && posts.length > 0;
  console.log("render", data.data);
  return (
    <section>
      <header>
        <h1>All Posts</h1>
      </header>
      {hasPosts ? (
        <ul className="posts">
          {data.data.map((post: any) => (
            <Post key={getKey(data.metadata)} data={post} page={parseInt(data.metadata.page)} />
          ))}
        </ul>
      ) : (
          <NoContent />
        )}
    </section>
  );
};
