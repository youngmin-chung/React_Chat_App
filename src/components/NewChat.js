import React, { useState, useEffect } from "react";
import "./NewChat.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Api from "../Api";

export default ({ user, chatList, show, setShow }) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        const getList = async () => {
            if (user !== null) {
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        };
        getList();
    }, [user]);

    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2);

        handleClose();
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="newChat" style={{ left: show ? 0 : -415 }}>
            <div className="newChat_header">
                <div onClick={handleClose} className="newChat_backbutton">
                    <ArrowBackIcon style={{ color: "#FFF" }} />
                </div>
                <div className="newChat_headerTitle">Hello World!</div>
            </div>

            <div className="newChat_body">
                {list.map((item, key) => (
                    <div
                        onClick={() => addNewChat(item)}
                        className="newChat_item"
                        key={key}
                    >
                        <img
                            className="newChat_itemAvatar"
                            src={item.avatar}
                            alt=""
                        />
                        <div className="newChat_itemName">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
