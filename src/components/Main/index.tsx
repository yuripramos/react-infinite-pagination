import React, { useContext } from 'react';

import Hero from '../Hero/index';
import PostList from '../PostList/index';
import { PostsContext } from '../../store/Posts/index';

export default () => {
  const { state: posts }: any = useContext(PostsContext);

  return (
    <main>
      <Hero />
      <PostList data={posts.data} disabledItems={posts.clickedItems} />
    </main>
  );
};
