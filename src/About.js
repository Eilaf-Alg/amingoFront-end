import React, {useContext} from 'react';
import NavBar from "./NavBar"
import RegisterLogin from './RegisterLogin'
import { AppContext } from './App'
import Footer from "./Footer";
import { InfoGroup } from "./InfoGroup";
import Jumbotron from "./Jumbotron";

const About = () => {

    const [state, setState] = useContext(AppContext)

    return (

        <div className="About Footer-flex-wrapper">
            <NavBar />
            <div className="container aboutJumbo">
                <h1> <i className="fas fa-users"></i> </h1>
                <h1> What we do </h1>
                <p> Being a data-driven professional, 
                    Aja knows her own clients as a freelance writer and strategist don't just want to see 
                    what she's written -- they want to see how her content has performed. With that in mind, 
                    her "About Me" page tells a story of her career growth, which peaks -- no pun intended -- 
                    at an impressive line graph showing the result of an SEO strategy she implemented for the HubSpot Blog. 
                    (The graph's sharp decline at September simply indicates when she stopped collecting data.) </p>
            </div>

            <Jumbotron JumboLocation="Bottom" img="img/sunset.jpeg">
                Sign Up
            </Jumbotron>

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

export default About;