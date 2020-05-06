import React from 'react';


type Post = {
  data: {
    id: string,
    absoluteIndex: number,
    name: string,
  };
}


export default ({ data: { id, absoluteIndex, name } }: Post) => {
  return (
    <li>
      name: {name}
      id: {id}
      index: {absoluteIndex}
    </li>
  );
};
