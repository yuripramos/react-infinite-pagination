import React, { useState, useEffect } from 'react';

import Post from '../Post/index';
import NoContent from '../NoContent/index';
import Arrow from '../../assets/icons/Arrow';

const getKey = (post: any) => {
  const { authorId, publishedAt } = post.metadata;
  return `post-${authorId}-${publishedAt}`;
};

type Props = {
  data: any
}

export default ({ data }: Props) => {
  console.log("data comp", data);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    setPosts(data);
  }, [data]);

  const hasPosts = posts.length > 0;

  return (
    <section>
      <header>
        <h1>All Posts</h1>
      </header>
      {hasPosts ? (
        <ul className="posts">
          {data.map((post: any) => (
            <Post key={getKey(post)} id={getKey(post)} data={post} />
          ))}
        </ul>
      ) : (
          <NoContent />
        )}
    </section>
  );
};
