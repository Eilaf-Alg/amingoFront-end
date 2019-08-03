import React from 'react';
import SignUpWindow from './SignUpWindow';
import LoginWindow from './LoginWindow';

// uss CSS to hide one based on the className

const RegisterLogin = (prop) => {
    return (
        <div className="RegisterLogin">
            <div className="container">

                { prop.windowType === "registerWindow" && 
                    <div>
                    <h2>Register</h2>
                    <SignUpWindow />
                    </div>
                }   

                { prop.windowType === "loginWindow" && 
                    <div>
                    <h2>Login</h2>
                    <LoginWindow />
                    </div>
                }   

            </div>
        </div>
    )
} 

export default RegisterLogin;