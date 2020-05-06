import React, { useState, useEffect } from 'react';

import Post from '../Post/index';
import NoContent from '../NoContent/index';

const getKey = (post: any) => {
  const { page } = post;
  return `post-${page}-${Math.round(Math.random() * 10000)}`;
};

type Props = {
  data: any,
  metadata: any
}

export default ({ data: { data, metadata } }: Props) => {


  const [posts, setPosts] = useState([]);


  useEffect(() => {
    console.log("inside USeEffect")
    setPosts(data);
  }, [data]);

  const hasPosts = posts.length > 0;
  console.log("posts", posts, hasPosts, metadata);
  return (
    <section>
      <header>
        <h1>All Posts</h1>
      </header>
      {hasPosts ? (
        <ul className="posts">
          {data.map((post: any) => (
            <Post key={getKey(metadata)} data={post} />
          ))}
        </ul>
      ) : (
          <NoContent />
        )}
    </section>
  );
};
