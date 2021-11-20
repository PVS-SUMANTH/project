import React from "react";
import "firebase/app";
import {auth} from "../firebase";
import { GoogleOutlined } from '@ant-design/icons';
import firebase from "firebase/app";

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Login Yaar hello! welcome to the blueBuck</h2>
                <div className="login-button google"
                    onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) }   >
                    <GoogleOutlined /> google Se sign in Karo!
                </div>               
            </div>
        </div>
    )
}

export default Login;
