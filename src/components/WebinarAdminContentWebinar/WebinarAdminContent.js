import React from "react";
import './WebinarAdminContent.scss'
import WebinarAdminCreateWebinarTab from "../WebinarAdminCreateWebinarTab/WebinarAdminCreateWebinarTab";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import { useState } from "react";

const WebinarAdminContent = () => {
    const [isToggle, setIsToggle] = useState(1)
    const tapHandler = (index)=>{
        setIsToggle(index)
    }
  return <div className='container'>
  <p className='webinarText'>Webinar</p>
  <div className='webinarBox ir-ws-flex'>
    <p  className={`button ir-ws-text-center ${isToggle === 1 ? 'active-button' : ''}`} onClick={()=>tapHandler(1)}> Create Webinar</p>
    <p  className={`button ir-ws-text-center ${isToggle === 2 ? 'active-button' : ''}`} onClick={()=>tapHandler(2)}>Webinar List</p>
  </div>
  {isToggle === 1 ? <WebinarAdminCreateWebinarTab /> : null}
 {isToggle === 2 ? <WebinarAdminWebinarListTab /> : null}
  
</div>
};

export default WebinarAdminContent;
