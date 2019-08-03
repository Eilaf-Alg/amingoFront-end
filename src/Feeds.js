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
        <div className="Feeds Footer-flex-wrapper">
            <NavBar />
            <div className="container">
                <br/> <br/>
                <h1>Your Feeds: </h1>
                <FeedMedia image="img/a.jpg" title="Coding" text="Extremely fun gathering!!"/>
                <FeedMedia image="img/bg-showcase-2.jpg" title="Skating" text="Cras sit amet nibh libero, 
                    in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
                    Fusce condimentum nunc ac nisi vulputate fringilla. 
                    Donec lacinia congue felis in faucibus."/>
                <FeedMedia image="img/bg-showcase-3.jpg" titie="Solving Riddles" text="Cras sit amet nibh libero, 
                    in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
                    Fusce condimentum nunc ac nisi vulputate fringilla. 
                    Donec lacinia congue felis in faucibus./>
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