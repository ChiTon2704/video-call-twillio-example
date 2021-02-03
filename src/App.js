import React from 'react';
import './App.css';
// import VideoChat from './VideoChat';
import VideoCallScreen from './VideoCallScreen'
const App = () => {
  return (
    <div className="app">
      <div className="app-title">Video Call Twillio Example</div>
      <div>
        <VideoCallScreen />
      </div>
    </div>
  );
};

export default App;
