import React from "react";
import "./Login.css";
import Api from "../Api";
// import { Link, useHistory } from "react-router-dom";

export default ({ onReceive }) => {
    // leave commented below code for email authentication
    // const history = useHistory();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if (result) {
            onReceive(result.user);
        } else {
            alert("Error!");
        }
    };

    const handleGoogleLogin = async () => {
        let result = await Api.googlePopup();
        if (result) {
            onReceive(result.user);
        } else {
            alert("Error!");
        }
    };
    // leave commented below code for email authentication
    // const login = (event) => {
    //     event.preventDefault();
    //     Api.auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // logged in, redirect to homepage
    //             history.push("/");
    //         })
    //         .catch((e) => alert(e.message));
    // };

    // const register = (event) => {
    //     event.preventDefault();
    //     Api.auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // create a user and logged in...
    //             history.push("/");
    //         })
    //         .catch((e) => alert(e.message));
    // };

    return (
        <div className="login">
            <img
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/239px-WhatsApp.svg.png"
                alt=""
            />
            <div className="login_container">
                {/* 
                // leave commented below code for email authentication 
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                    ></input>
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                    ></input>
                    <button
                        onClick={login}
                        type="submit"
                        className="login_signInBtn"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </p>
                <button onClick={register} className="login_registerBtn">
                    Create WhatsApp Account
                </button> */}
                <button className="login_google" onClick={handleGoogleLogin}>
                    Login via Google
                </button>
                <button
                    className="login_facebook"
                    onClick={handleFacebookLogin}
                >
                    Login via Facebook
                </button>
            </div>
        </div>
    );
};
