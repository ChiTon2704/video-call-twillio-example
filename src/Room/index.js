import React, { useEffect, useState } from "react";
import Participant from "../Participant/index";
import BannerMenu from "../Bannermenu/index"
import './style.scss'

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);
  const [isShowBanner, setIsShowBanner] = useState(true);

  let timer = null;

  const handleMouseMove = () => {
    if (timer) {
      clearTimeout(timer);
      setIsShowBanner(true);
    }
    timer = setTimeout(() => {
      setIsShowBanner(false);
    }, 5000);
  };

  useEffect(() => {
    handleMouseMove();
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room">
      <div className="body-left-wrapper">
        <div className="header">
          <div className="room-name">Room: {roomName}</div>
          <button onClick={handleLogout}>Log out</button>
        </div>
        <div className="local-participant-has-remote">
          {room && remoteParticipants.length > 0 &&
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              isLocalParticipant
            />
          }
        </div>
      </div>
      {room && remoteParticipants.length < 1 ?
        <div className="local-participant-not-remote">
          <BannerMenu isShowBanner={isShowBanner} />
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
            isLocalParticipant
          />
        </div>
        :
        <div className="remote-participants">{remoteParticipants}</div>
      }
    </div>
  );
};

export default Room;
