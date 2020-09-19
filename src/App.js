import React, { useState, useEffect } from "react";
import "./App.css";
import Api from "./Api";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";

export default () => {
    const [chatList, setChatList] = useState([]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);

    const [showNewChat, setShowNewChat] = useState(false);

    useEffect(() => {
        if (user !== null) {
            let unsub = Api.onChatList(user.id, setChatList);
            return unsub;
        }
    }, [user]);

    const handleNewChat = () => {
        setShowNewChat(true);
    };

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL,
        };
        await Api.addUser(newUser);
        setUser(newUser);
    };

    if (user === null) {
        return <Login onReceive={handleLoginData} />;
    }

    return (
        <div className="app-window">
            <div className="sidebar">
                <NewChat
                    chatList={chatList}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <header>
                    <img
                        className="header_avatar"
                        src={user.avatar}
                        alt=""
                    ></img>
                    <div className="header_buttons">
                        <div className="header_btn">
                            <DonutLargeIcon style={{ color: "#919191" }} />
                        </div>
                        <div onClick={handleNewChat} className="header_btn">
                            <ChatIcon style={{ color: "#919191" }} />
                        </div>
                        <div className="header_btn">
                            <MoreVertIcon style={{ color: "#919191" }} />
                        </div>
                    </div>
                </header>
                <div className="search">
                    <div className="search_input">
                        <SearchIcon style={{ color: "#919191" }} />
                        <input type="search" placeholder="Search the name" />
                    </div>
                </div>
                <div className="chat_list">
                    {chatList.map((item, key) => (
                        <ChatListItem
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatList[key].chatId}
                            onClick={() => setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>
            <div className="content_area">
                {activeChat.chatId !== undefined && (
                    <ChatWindow user={user} data={activeChat} />
                )}
                {activeChat.chatId === undefined && <ChatIntro />}
            </div>
        </div>
    );
};
