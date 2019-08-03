import React, { useContext } from 'react';
import Button from './Button';
import { AppContext } from './App'

/** 
 * 
 * Use <AppContext.Consumer> whenever we want to access the passed data from within JSX
 * Use 'useContext' if oustide JSX
*/

const SignUpButton = (prop) => {

    // useContext will give the values from context (the same thing we declared in the value 'from the Provider')
    const [state, setState] = useContext(AppContext);
    
    const openWindow = () => {

        if (prop.window === "register"){
            setState({...state, signUpForm: true})
        } else {
            setState({...state, logInForm: true})
            console.log('SignUpButton) logInForm:', state.logInForm);
        }
        
    }

    // const openRegisterWindow = () => {
    //             setState({...state, signUpForm: true})
    //             console.log('SignUpButton) signUpForm:', state.signUpForm);
    // }

    // const openLogInWindow = () => {
    //             setState({...state, logInForm: true})
    //             console.log('SignUpButton) logInForm:', state.logInForm);
    // }


    // AppContext.Consumer will give you value from context in JSX
    return (
        /* Always make sure ONLY the element that uses the data from Consumer is wrapped with it. NOT any other elements
            otherwise React will be confused; will not know which elenent is consuming. Not even a <div> */
      <AppContext.Consumer>
        {
            // onClickFunction() below is coming from our onClick() definition of the Button component
            (value)=> 
            <Button onClickFunction={openWindow} className="link"> {prop.children} </Button>
            //<Button onClickFunction={openWindow} className="link"> { value[0].label}</Button>
            // in the { value[0].label} , the label value is passed from the declaration of the array in Home.js
            // it is another way to pass the text dynalically. Another way is {prop.children}, and it will be passed from NavBar.js
        }
      </AppContext.Consumer>
    )
}

export default SignUpButton;