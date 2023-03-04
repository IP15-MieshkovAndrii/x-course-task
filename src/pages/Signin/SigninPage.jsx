import React from 'react';
import ReactDOM from "react-dom";
import './styles.scss';

import img from '../../images/avatar2.png'

const SigninPage = () => {
    return (
        <div className="section-inner auth">
        <div className="auth_avatar">
            <img src={img} alt="Avatar" />
        </div>
        <form className="auth_form">
            <label>Username</label>
            <input className="input" type="text" id="username" placeholder="type Username" />
            <button className="my-button auth__button">Sign-In</button>
        </form>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SigninPage />, rootElement);


export default SigninPage;