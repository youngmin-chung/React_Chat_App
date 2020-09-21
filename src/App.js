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
import Tooltip from "@material-ui/core/Tooltip";

export default () => {
    const [chatList, setChatList] = useState([]);
    const [activeChat, setActiveChat] = useState({});
    // Uncomment here before deploying/publishing
    //const [user, setUser] = useState(null);

    // Comment here before deploying/publishing
    const [user, setUser] = useState({
        id: "lshPuh6XSeeff8rcU61bk9gIvY83",
        name: "Test Account",
        avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    });

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

                    <p className="user_name">{user.name}</p>
                    <div className="header_buttons">
                        <Tooltip title="Status (...not yet)" arrow>
                            <div className="header_btn">
                                <DonutLargeIcon style={{ color: "#919191" }} />
                            </div>
                        </Tooltip>
                        <Tooltip title="New Chat" arrow>
                            <div onClick={handleNewChat} className="header_btn">
                                <ChatIcon style={{ color: "#919191" }} />
                            </div>
                        </Tooltip>
                        <Tooltip title="More (...not yet)" arrow>
                            <div className="header_btn">
                                <MoreVertIcon style={{ color: "#919191" }} />
                            </div>
                        </Tooltip>
                    </div>
                </header>
                <div className="search">
                    <div className="search_input">
                        <Tooltip title="Search function (...not yet)" arrow>
                            <SearchIcon style={{ color: "#919191" }} />
                        </Tooltip>
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
