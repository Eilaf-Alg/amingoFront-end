import React, { useContext } from 'react';
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";
import JigSaw from "./JigSaw";
import { InfoGroup, Info } from "./InfoGroup";
import { AvatarGroup, Avatar } from "./AvatarGroup";
import Footer from "./Footer";
import RegisterLogin from './RegisterLogin'
import { AppContext } from './App'

/* Note: Vendor file under "public" folder is a bootstrap CSS downloaded file not cdn(link), 
we reused it from the original landingPage template */

// AppConext is like an elevator that can take us through the levels of the components
// Level1: App component, NavBar is level2, and the button inside it is level3.
// AppConext allows us to pass data between different leveled components.
// We use its properties Provider and consumer as in AppContext.Provider and AppContext.Consumer
/* We want to pass the signUpForm's state to the button inside the NavBar component, for it to change the state when clicked
but without the NavBar caring for it. Path will be Home.js -> NavBar.js --> Button.js
*/


const Home = () => {

const [state, setState] = useContext(AppContext)

  return (

      <div className="Home flex-wrapper">
        <NavBar />
        {/* JumboLocation prop is to alter the height of the imagr based on its location */}
        <Jumbotron JumboLocation="Top" img="img/social.jpg" >
        Build great relationships with your neighbors!
          </Jumbotron>

        {/* className just to style it */}
        <InfoGroup className="topGroup">
          <Info 
            iconClass="fas fa-seedling m-auto text-primary"
            title="Gardening"
            caption="learn about taking care of your plants and have lovely additons to house decor"
          />

          <Info 
            iconClass="fas fa-running m-auto text-primary"
            title="Jogging"
            caption="Seeking the perfect jogging partners? Jog in groups and have fun!"
          />

          <Info 
            iconClass="fas fa-pizza-slice m-auto text-primary"
            title="Cooking"
            caption="Cooking in groups is super fun! learn, chat together and have amusing experiences"
          />
        </InfoGroup>


        <JigSaw
          order={2}
          img="img/bg-showcase-1.jpg"
          title="Kids Outing"
          caption="Bring your kids for the ever-popular Kids Outing gathering and meet all your neighbours! 
          Kids of all ages are welcome - start by registering at our community website!"
        />

        <JigSaw
          order={1}
          img="img/bg-showcase-2.jpg"
          title="Furniture Making Class 3"
          caption="New season - furniture making classes, make yourself useful and learn how to make your own furniture! 
          Everyone in the community are welcome to join Season 3 of the furniture making class!"
        />

        <JigSaw
          order={2}
          img="img/bg-showcase-3.jpg"
          title="The Tennis Club"
          caption="For the tennis enthusiasts. Learn how to play tennis and hit some balls with the locals. 
          Have fun, get some exercise and wind down after a long day!"
        />


        {/* We can also use InfoGroup here and it will work. since both are just containers */}
        <InfoGroup className="testimonials" title="What people are saying...">
          <Avatar
            img="img/testimonials-1.jpg"
            title="Margaret E."
            caption='"This is fantastic! Thanks so much guys!"'
          />
          <Avatar
            img="img/testimonials-2.jpg"
            title="Fred S."
            caption='"Bootstrap is amazing. Ive been using it to create lots of super nice landing pages."'
          />
          <Avatar
            img="img/testimonials-3.jpg"
            title="Sarah W."
            caption='"Thanks so much for making these free resources available to us!"'
          />
        </InfoGroup>

        {/* JumboLocation prop is to alter the height of the imagr based on its location */}
        <Jumbotron JumboLocation="Bottom" img="img/bg-masthead.jpg">
        Ready to Sign Up?
        </Jumbotron>

        <InfoGroup>
          <Footer></Footer>
        </InfoGroup>

        {/* Both args need to be true (or not NULL) for the SignUpWindow to show */}
        {/* we need to pass the signUpForm's state to the button inside the NavBar component --> use Provider */}
        {state.signUpForm && <RegisterLogin windowType="registerWindow" />}
        {state.logInForm && <RegisterLogin windowType="loginWindow" />}
        
      </div>

  ); // return closed
};

export default Home;
