import React from "react";
import LogOutButton from './LogOutButton';
// import Button from "./Button"  NO NEED FOR IT AS WE REPLACED Button WITH SignUpButton
import SignUpButton from "./SignUpButton"

// Link component is the just as an anchor component ' <a href="" /> ' but the difference is that
// an anchor does a server request, but Link lets React handle the request without going to the server
import { Link } from "react-router-dom";


const NavBar = () => {

  // if thr item is not stored loggedIn will remain NULL
  const loggedIn = localStorage.getItem('userToken');
  console.log('loggedIn:', loggedIn);

    return (
      <div className="MyNavbar navbar navbar-light bg-light static-top ">

        {/* Adding a container helps us to set the margin of the components. other possible className: container-fluid */}
        <div className="nav-links container">

          {/* 
            CHANGED THE <h2> to <Link> to give our Logo the ability be clicked and to route to the Home page if clicked
              <h1 className="logo"> Logo</h1>
          */}
          <Link className="logo" to="/"> 
          <h2>
          <i className="fab fa-dribbble-square"></i>
           Interests 
           </h2> 
          </Link>

          <Link className="link" to="/"> Home </Link>
          <Link className="link" to="/about"> About </Link>
          <Link className="link" to="/feeds"> Feeds </Link>

          {/* We can't use className for Button just as Link bcs we created it */}
          {/* className property in the Button below comes from the way we declared our Button component. 
          Since Button is our component and not the default, we should manually add the className property to be able to use it */}
          {/* <Button className="link"> Sign in </Button> WE REPLACED THIS OLD BUTTON CODE BCS ITS GENERIC, WE WANT ANOTHER BUTTON TO RECIEVE THE STATE*/} 

          {/* If loggedIn, display the logOut Button, and Show LogIn button otherwise */}
          {/* if the token is stored that means the user is Logged In */}
          { !loggedIn && <SignUpButton window="login"> LogIn </SignUpButton> }
          { loggedIn && <LogOutButton> Log out</LogOutButton> }
          

        </div>

      </div>
    );
  };

  export default NavBar