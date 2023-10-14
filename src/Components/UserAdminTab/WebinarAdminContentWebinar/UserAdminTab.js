import React, {useState} from "react";
import CustomTab from "../../CustomTabs/CustomTab";
import CustomTabs from "../../CustomTabs/CustomTabs";
import WebinarAdminWebinarListTab from "../WebinarAdminWebinarListTab/WebinarAdminWebinarListTab";
import WebinarAdminCreateWebinarTab from '../WebinarAdminCreateWebinarTab/WebinarAdminCreateWebinarTab'
import './UserAdminTab.scss'

const UserAdminTab = () => {
    const [active, setActive] = useState(0);
    const handleChange = newActive => setActive(newActive);

    return (
        <div className="ir-ws-webiner-admin-container">
            <p className='ir-ws-webiner-admin-text '>Webinar</p>
        <CustomTabs active={active} onChange={handleChange}>
            <CustomTab title="Create Webiner">
                <WebinarAdminCreateWebinarTab/>
            </CustomTab>
            <CustomTab title="Webiner List">
                <WebinarAdminWebinarListTab/>
            </CustomTab>
        </CustomTabs>
        </div>
    );
};

export default UserAdminTab;
