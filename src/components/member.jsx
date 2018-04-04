import React from 'react';

const member = (props) => (
  <div>
    <img src={props.image_48} />
    {props.real_name}
  </div>
);

export default member;
