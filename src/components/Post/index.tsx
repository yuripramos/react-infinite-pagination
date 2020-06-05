import React, { useContext, useState } from 'react';
import './styles.scss';
import _ from "lodash";
import { PostsContext } from "../../store/Posts/index";
import { getPosts } from '../../services/api';

type Post = {
  data: {
    id: string,
    absoluteIndex: number,
    name: string,
  },
  page: number,
  handleClick: (id: number) => void,
  disabled: boolean,
  clickedItems: number[]
};

type MyContextType = {
  state?: any,
  setState?: (data: object) => void;
}

export default ({ data: { id, absoluteIndex, name }, page, handleClick, disabled, clickedItems }: Post) => {


  const myPostContext = useContext<MyContextType>(PostsContext);

  window.onscroll = _.debounce(async () => {
    if (
      document.documentElement.scrollHeight - document.documentElement.scrollTop
      === document.documentElement.clientHeight
    ) {
      const { data } = await getPosts(page + 1);
      myPostContext.setState({
        ...myPostContext.state,
        clickedItems,
        data: {
          data: _.flatten([myPostContext.state.data.data, data.data]), metadata: data.metadata
        },
      });
    }
  }, 100);

  return (
    <li className={`item ${disabled && 'disabled'}`} onClick={() => handleClick(absoluteIndex)}>
      <span>name:</span>{name}
      <span>id:</span>{id}
      <span>index:</span>{absoluteIndex}
    </li>
  );
};
