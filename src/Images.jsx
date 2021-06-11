import React from 'react';

function MyImg(props){
    return (
      <>
      <img src={props.imgsrc} title={props.title} alt={props.sname}/>
      <input type="text" value={props.sname}/>
      </>
    );
  }

  export default MyImg;