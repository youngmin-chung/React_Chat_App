import React from "react";
import "./ChatIntro.css";

export default () => {
    return (
        <div className="chat_intro">
            <img src="" alt="" />
            <h1>Welcome to my WhatsApp cloning project</h1>
            <h2>Project Name</h2>
            <h4>
                Chatting App cloned from WhatsApp An application used to
                chatting form, built with <br />
                React, JavaScript, Material UI, CSS and Firebase
                Authentication/Firestore.
            </h4>
            <h2>Project Status</h2>
            <h4>
                This project is currently in development. <br />
                Major functionality about chatting each other, login
                authentication by google/facebook account works after login via
                Google/Facebook
            </h4>
            <h2>Installation and Setup Instructions</h2>
            <h4>
                Clone down this repository. You will need node and npm installed
                globally on your machine.
                <br />
                Installation: npm install <br />
                To Start Server: npm start <br />
                To Visit App: localhost:3000/
                <br />
                If you want to test login authentication, Clone down this
                repository. And then go to 'App.js' and commented direction
                <br />
            </h4>
            <h2>Reflection</h2>
            <h4>
                Project goals included using technologies learned up until this
                point and familiarizing myself with documentation for new
                features using React, JavaScript, Material UI, CSS and Firebase
                Authentication/Firestore Originally I wanted to build an
                application that allowed users to chat each other.
                <br />
                I started this process by using the create-react-app
                boilerplate.
                <br />
                One of the main challenges as follows,
                <br />
                1. Add functions like changing profile photo and profile
                message.
                <br />
                2. Add function to upload multimedia such as photo, video and
                voice recording to chat screen. <br />
                3. Add function like searching user name at search field.
                <br />
                4. Add function to delete current chat room(s)
            </h4>
        </div>
    );
};
