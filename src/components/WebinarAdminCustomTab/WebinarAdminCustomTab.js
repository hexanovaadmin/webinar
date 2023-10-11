import React from 'react'
import './WebinarAdminCustomTab.scss'

const WebinarAdminCustomTab = ({ isToggle, onTabChange}) => {
  return (
<div className='webinarBox ir-ws-flex'>
      <p
        className={`button ir-ws-text-center ${isToggle === 1 ? 'active-button' : ''}`}
        onClick={() => onTabChange(1)}
      >
        Create Webinar
      </p>
      <p
        className={`button ir-ws-text-center ${isToggle === 2 ? 'active-button' : ''}`}
        onClick={() => onTabChange(2)}
      >
        Webinar List
      </p>
    </div>
);
}

export default WebinarAdminCustomTab