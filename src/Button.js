import React from "react";

// parenthesis in {prop.children} tell React that this is a variable not a constant
  const Button = (prop) => {
    return (
      <div>
        {/* In the line below we are giving our defined Button an onClickFunction. We also gave it the ability to accept a className  */}
        <button onClick={prop.onClickFunction} 
        className={ `btn btn-primary ${prop.className}` }> {prop.children} </button>
      </div>
    );
  };

  export default Button