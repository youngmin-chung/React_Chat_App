import React, { useState, useEffect } from "react";
import "./ChatListItem.css";

export default ({ onClick, active, data }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        if (data.lastMessageDate > 0) {
            let d = new Date(data.lastMessageDate.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return (
        <div
            className={`chatListItem ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <img className="chatListItem_avatar" src={data.image} alt=""></img>
            <div className="chatListItem_lines">
                <div className="chatListItem_line">
                    <div className="chatLIstItem_name">{data.title}</div>
                    <div className="chatLIstItem_date">{time}</div>
                </div>
                <div className="chatListItem_line">
                    <div className="chatLIstItem_lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
