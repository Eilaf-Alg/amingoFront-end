import React, { useContext } from 'react';
import Button from './Button';
import { AppContext } from './App'


// Note:
// Use 'useContext' if outside JSX
// use 'AppContext.Consumer' if inside JSX

const LogOutButton = (prop) => {

    const [state, setState] = useContext(AppContext);
    console.log('LogOutButton clicked!')

    const logOutUser = () => {
        localStorage.clear();
        setState({...state, userLoggedIn: false})
        console.log('Storage cleared')
    }

    return (
        <Button onClickFunction={logOutUser} className="link">{prop.children}</Button>
    )
}

export default LogOutButton; 