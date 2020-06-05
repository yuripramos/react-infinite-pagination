import React, { ReactNode } from 'react';
import { PostsProvider } from './Posts/index';


type Props = {
  children: ReactNode
}


export default ({ children }: Props) => (
  <PostsProvider>{children}</PostsProvider>
);
