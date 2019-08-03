import React from "react";


export const Avatar= (prop) => {
    return (
      <div className="Avatar">
        <img src={prop.img} alt="Avatar img here"/>
        <p className="title"> {prop.title} </p>
        <p className="caption"> {prop.caption} </p>
      </div>
    );
  };

export const AvatarGroup = (prop) => {
    return (
      <div className="AvatarGroup">
         {prop.children} 
      </div>
    );
  };


  export default AvatarGroup;