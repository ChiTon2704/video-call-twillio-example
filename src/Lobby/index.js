import React from "react";
import './style.scss'

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <div className="lobby-screen">
      <div className="lobby-wrapper">
        <div className="header">Join a room</div>
        <form onSubmit={handleSubmit}>
          <div className="name-user">
            <div className="label">Name:</div>
            <input
              type="text"
              id="field"
              value={username}
              onChange={handleUsernameChange}
              readOnly={connecting}
              required
            />
          </div>

          <div className="name-room">
            <div className="label">Room name:</div>
            <input
              type="text"
              id="room"
              value={roomName}
              onChange={handleRoomNameChange}
              readOnly={connecting}
              required
            />
          </div>

          <button className="join-btn" type="submit" disabled={connecting}>
            {connecting ? "Connecting" : "Join"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lobby;
