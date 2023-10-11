import React from "react";
import './WebinarAdminContent.scss'
import WebinarAdminCreateWebinarTab from "../WebinarAdminCreateWebinarTab/WebinarAdminCreateWebinarTab";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import WebinarAdminCustomTab from "../WebinarAdminCustomTab/WebinarAdminCustomTab";
import { useState } from "react";

const WebinarAdminContent = () => {
  const [isToggle, setIsToggle] = useState(1);

  const handleTabChange = (index) => {
      setIsToggle(index);
  };
  return <div className='ir-ws-webiner-admin-container ir-ws-position-relative'>
  <p className='ir-ws-webiner-admin-text '>Webinar</p>
  <WebinarAdminCustomTab isToggle={isToggle} onTabChange={handleTabChange} />
  {isToggle === 1 ? <WebinarAdminCreateWebinarTab /> : null}
 {isToggle === 2 ? <WebinarAdminWebinarListTab /> : null}
  
</div>
};

export default WebinarAdminContent;
