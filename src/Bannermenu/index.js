import React from 'react';
import MicOff from '../images/mic-off.svg';
import MicOn from '../images/mic-off-white.svg';
import CamOff from '../images/cam-off.svg';
import CamOn from '../images/cam-off-white.svg';
import CallEnd from '../images/call-end.svg';
import PropTypes from 'prop-types';
import './style.scss';

const BannerMenu = (props) => {
  const {
    handleEndCall, handleMuteMic, handleMuteVideo, isStudent, muteMic, muteVideo, isShowBanner
  } = props;
  return (
    <div className={`${isStudent ? 'student-banner-bottom' : 'banner-bottom'} ${isShowBanner ? 'isShowBanner' : ''}`}>
      <div className="mic-off-btn">
        <div className={`${muteMic ? 'icon-off' : 'icon-on'} icon`} role="presentation" onClick={handleMuteMic}>
          {isStudent ? <img src={muteMic ? MicOff : MicOn} alt="" /> : <img src={muteMic ? MicOn : MicOff} alt="" />}
        </div>
        <div className="content-icon">消音</div>
      </div>
      <div className="end-call-btn" role="presentation" onClick={handleEndCall}>
        <img src={CallEnd} alt="" />
      </div>
      <div className="camera-off-btn">
        <div className={`${muteVideo ? 'icon-off' : 'icon-on'} icon`} role="presentation" onClick={handleMuteVideo}>
          {isStudent ? <img src={muteVideo ? CamOff : CamOn} alt="" /> : <img src={muteVideo ? CamOn : CamOff} alt="" />}
        </div>
        <div className="content-icon">カメラ</div>
      </div>
    </div>
  );
};
BannerMenu.propTypes = {
  handleEndCall: PropTypes.func,
  handleMuteMic: PropTypes.func,
  handleMuteVideo: PropTypes.func,
  isStudent: PropTypes.bool,
  muteMic: PropTypes.bool,
  muteVideo: PropTypes.bool,
  isShowBanner: PropTypes.bool
};
export default BannerMenu;
