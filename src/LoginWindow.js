import React, { useContext, useState } from 'react';
import { AppContext } from './App';

// *** Note *** we created the file .env and pasted 'REACT_APP_API_URL=http://localhost:5000/' inside it 

const LoginWindow = () => {

    let email;
    let password;

    // global state
    const [state, setState] = useContext(AppContext);

    const closeWindow = () => {
        setState({...state, logInForm: false})
        console.log('LoginWindow) logInForm:', state.logInForm);
    }

    const [localState, setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    })

    const loginUser = () => {

        let formData = {
            email: email.value,
            password: password.value
        }
        // Use fetch retrieve JWT
        fetch(
            // ( 'http://localhost:5000/auth/login' ) this was the hardcoded string. We fixed it with the correct one below
            // in React, to be able to access any environment var we have to preceed it with REACT_APP_ and then the name of the var
            `${process.env.REACT_APP_API_URL}auth/login`, 
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        ).then(async res=>{
            // if could not logIn.. When 400 recieved here, that means email doesnt exist according to server.js code 
            if(res.status === "400") {
                setLocalState({ 
                    ...localState, 
                    successMessage: false, 
                    errorMessage: true 
                })
            } else {
                let userInfo = await res.json(); // must use await with async
                console.log("~This is userInfo", userInfo)
                console.log("~This is userInfo.token", userInfo.token)

                // localStorage is a built in javascript variable
                // helps us store data even if user refreshes page or goes to another one
                // We want to store the JWT in the browser storage
                localStorage.setItem('userToken', userInfo.token)
                

                // show the success message when logged in
                setLocalState({ 
                    ...localState, 
                    successMessage: true, 
                    errorMessage: false 
                })

                // close the LogIn window when logged in
                setState({...state, logInForm: false, userLoggedIn: true})

            }
        })

        // Store the JTW in localStorage
    }

    return(
    
    <div className="LoginWindow">
    <div className="container">

        <label>Email</label>

        {/* long way of writing ref, ref is something that gives us access to an element just  like html's getElementbyId() */}
        {/*  ref will return everything between the <......> the way below is the long way to write it */}
        <input ref={(comp)=> {
             email = comp
            console.log('LoginWindow) email comp', email)
            return email;
        }} type="text" className="form-control" />

        <label>Password</label> 
        {/* this is the short way to  */}
        <input ref={comp=> password = comp} type="password" className="form-control" />

        <button onClick={loginUser} className="btn btn-primary">Login</button>
        <button onClick={closeWindow} className="btn btn-danger">Cancel</button>


        {/* display green box if successMessage is true */}
        {
            localState.successMessage && 
            <div className="alert alert-success">
            You've successfully Logged In.
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
)
}

export default LoginWindow;



// import React from 'react';

// const LoginWindow = () => {

//     let email;
//     let password;

//     return(<div className="LoginWindow">
//     <div className="container">

//         <label>Email</label>
//         <input ref={comp=> email = comp} type="text" className="form-control" />

//         <label>Password</label>
//         <input ref={comp=> password = comp} type="password" className="form-control" />

//         <button className="btn btn-primary">Login</button>
//         <button className="btn btn-danger">Cancel</button>
//     </div>
// </div>)
// }

// export default LoginWindow;