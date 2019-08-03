import React, {createContext, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Feeds from "./Feeds";
import FeedsNotLoggedIn from "./FeedsNotLoggedIn";

// Since App.js will contain all the route components (Home, About ..), we can import
// the CSS file inside App.js and only once, instead of repeatedly inside all the routes' js files
import "./App.css";

export const AppContext = createContext();

const App = () => {

  const [state, setState] = useState({ 
    signUpForm: false,
    logInForm: false,
    userLoggedIn: false
   });


const checkedLoggedIn = (comp) => { 

  // since all react components are actually functions at the end of the day
  console.log(state.userLoggedIn)
  if(state.userLoggedIn) return comp;
  else return ()=><FeedsNotLoggedIn/>
} 

  console.log('App) signUpForm:', state.signUpForm);
  console.log('App) logInForm:', state.logInForm);

  return (
    
    // the prop we use with AppConext.Provider has a fixed name which is "value" which we cannot change
    // We are passing the state array in the value
    <AppContext.Provider value={[state, setState]}>

      {/* // The BrowserRouter allows us to navigate to and display the page (aka route) we want
      //  by swapping the components of the page. So, instead of doing a request to the server to get
      // the resources of the 2nd page, BrowserRouter captures that client request and handles it
      // by changing the content dynamically. Hence, the page does not need to be refreshed.
      // This is done but at the same time the URL is changed to match the new content. It does not stay fixed
      // Each page will be modeled as a Big component that will be selected from below such as Home.js */}
      <BrowserRouter>
      {/* If we don't wrap the Routes in a Switch, contents of each page will all show up in all pages.
      Switch tells each page to go to its respected route */}
        <Switch>
            {/* "exact" keyword below means only display the home page when the Route is exactly this.
              it is aslo short-hand way of writing "exact = {true}" */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/feeds" component={checkedLoggedIn(Feeds)} />
        </Switch>
      </BrowserRouter>
      </AppContext.Provider>
  );
}; 

export default App;
