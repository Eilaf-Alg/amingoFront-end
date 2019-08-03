import React from "react";
import Button from "./Button"
import { useState } from 'react';
import SignUpButton from "./SignUpButton"

const Jumbotron = (prop) => {

  // useState to make this component stateful
  const [registered, setRegistered] = useState(false);

  // onClick handler for 'SignUp' <Button> component
  // const registerUser = () => {
  //   setRegistered(true);
  // }


    return (
      <div className={`Jumbotron jumbotron ${prop.JumboLocation}`}
            style={{ backgroundImage: `url('${prop.img}')` }}>

        <div className="container">
          {/* The row col structure below is to have 1 row and 2 cols to place 
          the input in the 1st col and button in the 2nd col */}
          <div className="row">
            {/* I think the class below shortened the input form  */}
            <div className="col-xl-7 mx-auto">
              <h1>{prop.children}</h1>
              <div className="form-row align-items-center">
                <div className="col">
                  {/* form-control className below gives us a nice style for the form */}
                  <input className="form-control" placeholder="Enter your email..." type="text" />
                </div>

                {/* "col-auto" below helped align the input and the button properly as opposed to only "col" */}
                <div className="col-auto">
                  {/* onClickFunction comes from the Button defenition */}
                  <SignUpButton window="register">Sign Up</SignUpButton>
                  
                </div>
              </div>
              <br/>

              {/* The { x && y } way of writing is called the condition notation */}
              {/* Using a bootstrap alert classes below to display a box, if state is 'registered' then display the alert box */}
              {/* {registered && <div className="alert alert-success"> Congratulations!! Successfully registered </div>} */}

            </div>
          </div>
          {/* end of the row col structure for the Jumbotron */}
        </div>
      </div>
    );
  };

  
  export default Jumbotron