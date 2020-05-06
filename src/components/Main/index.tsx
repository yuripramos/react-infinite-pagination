import React, { useContext } from 'react';

import Hero from '../Hero/index';
import PostList from '../PostList/index';
import { PostsContext } from '../../store/Posts/index';
import { sortObjectsArrayByKey } from '../../utils/helpers';

export default () => {
  const { state: posts }: any = useContext(PostsContext);
  const sortedDescPosts = sortObjectsArrayByKey(posts.data, ['metadata', 'publishedAt'], true);

  return (
    <main>
      <Hero />
      <PostList data={sortedDescPosts} />
    </main>
  );
};
