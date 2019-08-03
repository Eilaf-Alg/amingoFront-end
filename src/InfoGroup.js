import React from "react";

export const Info = (prop) => {
    return (
      <div className="Info">
        <i className={prop.iconClass}> </i>
        <h3> {prop.title} </h3>
        <p> {prop.caption} </p>
      </div>
    );
  };
  

export const InfoGroup = (prop) => {
    return (
      // Below we used `` quotes to have a dynamic className, we want to have the hardcoded ones below PLUS the one passed from the ßcaller
      <div className={`InfoGroup container-fluid ${prop.className}`}>

        {/* If title String is not NULL => we passed a string through App.js file, the 2nd arg will be executed */}
        {prop.title && <h2>{prop.title}</h2>}

        <div className="container">{prop.children}</div>
      </div>
    );
  }

  export default InfoGroup;