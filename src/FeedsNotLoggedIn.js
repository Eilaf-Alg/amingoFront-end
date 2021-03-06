import React, {useContext} from 'react';
import NavBar from './NavBar';
import RegisterLogin from './RegisterLogin';
import FeedMedia from './FeedMedia';
import { AppContext } from './App'
import Footer from "./Footer";
import { InfoGroup } from "./InfoGroup";

const Feeds = () => {

    const [state, setState] = useContext(AppContext)

    return (
        <div className="About Footer-flex-wrapper">
            <NavBar />
            <div className="container">
                <br/> <br/>
                <h1> <i className="fas fa-sign-in-alt"></i> </h1>
                <h1> Please Log in to see your feeds :) </h1>
            </div>


            <br/>
            <InfoGroup>
            <Footer></Footer>
            </InfoGroup>

            {/* Both args need to be true (or not NULL) for the SignUpWindow to show */}
            {/* we need to pass the signUpForm's state to the button inside the NavBar component --> use Provider */}   
            {state.signUpForm && <RegisterLogin windowType="registerWindow" />}
            {state.logInForm && <RegisterLogin windowType="loginWindow" />}
        </div>
    )
}

export default Feeds; 