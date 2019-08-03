import React, { useContext, useState } from "react"; // useContext is a state local to this file. useState comes from an outside source
import { AppContext } from "./App";

// *** Note *** we created the file .env and pasted 'REACT_APP_API_URL=http://localhost:5000/' inside it

const SignUpWindow = () => {
  let name;
  let email;
  let password;
  let gender;

  // this is to close the SignUpForm
  const [state, setState] = useContext(AppContext); 

  // this is to display the green notification. contains info about successfully signedUp or not
  //const [signedUp, setSignedUp] = useState(false);
  const [localState, setLocalState] = useState({
    successMessage: false,
    errorMessage: false
})


  /* Function to register the user and connect to the backend server */
  const registerUser = () => {
    /* The formData object is created to store the info entered by the user */
    let formData = {
      name: name.value, //  name.value comes from ref{} prop below in JSX. but it comes from built in html element. any html tag has a value prop, which i think means what is in between the tags
      email: email.value,
      password: password.value,
      gender: gender.value
    };

    // fetch fx comes from javascript (built in), just like console.log
    // fetch is a new javascript fx that was made to replace the old way of doing it : AJAX with JQuery
    // fetch is a promise because it has a callback --> uses .then
    // bcs it is a promise, compiler will not wait for it to finish but will continue with rest of code. however, after its done it will come back to execute .then
    // syntax is: fetch(.. , ..)
    fetch(
      // URL: here we hardcoded it, it should be retrieved from a heroku environment variable. just like the secret. 
      // we need to deploy both, front-end and back end servers to heroku
      // 'http://localhost:5000/auth/register', <---- previously hardcoded string. Now not hardcoded
      `${process.env.REACT_APP_API_URL}auth/register`,
      // Data
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
      }
    )

      //.then(res => res.json()) // after this 'then' the server is done registering

      //replaced the commented line above to add more functionality: which is to handle errors
      .then(res => {
          if(res.status === "400"){
            //Handle the error, the 400 status was explicitly specified in the back-end's server.js code
            setLocalState({ ...localState, successMessage: false, errorMessage: true}); 
            /** In the line above if we dont set the success message to false, the following scenario will happen:
             * 1- user attempts to create account but uses an existing email -> gets red box
             * 2- then they try a different non-existent email -> succeeds, and gets green box. BUT RED IS STILL THERE
             */

          }
          else {
              //parse json data
                res.json();
                
                //display green box success message
                setLocalState({ ...localState, successMessage: true, errorMessage: false}); //localState is an array
                /* The ... AKA 'spread syntax' is a must to use if we only want to update one entry in the array
                Without the '...localState' syntax, we lose all the other array entries 
                if we say setLocalState({successMessage: true}); it is as if we assigned the array to have 
                only 1 item which is successMessage: true
                */

                // close the register window 
                setState({...state, signUpForm: false})

          }
      })
      // commented .then() below, We initially had 2 consecutive .then()s, we removed the 2nd one below and included it's code in the 1st as the 2nd doesn't need the 1st to start
      //.then(retrn => setSignedUp(true)); //we named retrn for return. display green box only after user is registered

      // If the fetch() fails, did not reach to the backend (ex: no internet). but Not for a bad request (ex: email incorrect) 
      .catch(err => {
          console.log('err', err);
      })

  };

  /* Function to close the SignUp window upon clicking cancel or submiting the form */
  const closeSignUp = () => {
    setState({...state, signUpForm: false})
    console.log('SignUpWindow) signUpForm:', state.signUpForm);
  };

  return (
    <div>
      <div className="container">
        {/* 'ref' below is a variable that comes from JSX, we used it to  
      capture the data from the inputs and assign it to formData object we created above  */}

        {/* The form inputs here must match what we used in postman AKA the Schema we wrote for User.js in amingo project */}
        <label>Name</label>
        <input ref={comp => (name = comp)} type="text" className="form-control" />

        <label>Password</label>
        <input ref={comp => (password = comp)} type="password" className="form-control"/>

        <label>Email</label>
        <input ref={comp => (email = comp)} type="text" className="form-control"/>

        <label>Gender</label>
        <input ref={comp => (gender = comp)} type="text" className="form-control"/>

        <button onClick={registerUser} className="btn btn-primary"> Register </button>
        <button onClick={closeSignUp} className="btn btn-danger"> Cancel </button>

        {/* display green box if successMessage is true */}
        {
            localState.successMessage && 
            <div className="alert alert-success">
            Congratulation! You've been successfully signed up.
            </div>
        }

        {/* display red box if errorMessage is true */}
        {
            localState.errorMessage && 
            <div className="alert alert-danger">
            Sorry, this email already exists :(
            </div>
        }
      </div>
    </div>
  );
};

export default SignUpWindow;
