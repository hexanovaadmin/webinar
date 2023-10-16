import React, { useState, useEffect } from "react";
import './ChatNavigation.scss';
import ChatNavImg from '../../assets/images/chat-nav.png';
import FavNavImg from '../../assets/images/fav-nav.png';
import ArchNavImg from '../../assets/images/arch-nav.png';
import NotNavImg from '../../assets/images/not-nav.png';
import SetNavImg from '../../assets/images/set-nav.png';
import SetNavImgActive from '../../assets/images/set-nav-active.png';
import ChatNavImgActive from '../../assets/images/chat-nav-active.png';
import FavNavImgActive from '../../assets/images/fav-nav-active.png';
import ArchNavImgActive from '../../assets/images/arch-nav-active.png';
import NotNavImgActive from '../../assets/images/not-nav-active.png';
import NoImage from '../../assets/images/no-image.png';

const ChatNavigation = ({ setNavMenuItemActive, navMenuItemActive}) => {

  const initials = 'Saheb'

    const ChatNavValues = [
        {
            id: 1,
            alttitle: "Chat",
            img: ChatNavImg,
            imgActive: ChatNavImgActive,
        },
        {
            id: 2,
            alttitle: "Favourites",
            img: FavNavImg,
            imgActive: FavNavImgActive
        },
        {
            id: 3,
            alttitle: "Archive",
            img: ArchNavImg,
            imgActive: ArchNavImgActive
        },
        {
            id: 4,
            alttitle: "Notifications",
            img: NotNavImg,
            imgActive: NotNavImgActive
        },
        {
            id: 5,
            alttitle: "Settings",
            img: SetNavImg,
            imgActive: SetNavImgActive
        },
        {
            id: 6,
            alttitle: "Profile",
            img: NoImage,
            imgActive: NoImage
        }
      ];

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const saveColor = (color) => {
        localStorage.setItem(`userIconColor_${initials}`, color);
    };

    const getSavedColor = () => {
        return localStorage.getItem(`userIconColor_${initials}`);
    };

    const [backgroundColor, setBackgroundColor] = useState(getSavedColor() || getRandomColor());

    useEffect(() => {
        const savedColor = getSavedColor();
        if (savedColor) {
            setBackgroundColor(savedColor);
        }
    }, []);

    return (
        <div className="ir-chat-navigation-container side-menu flex-lg-column">
            <div className="navbar-brand-box">
                <a className="logo logo-light" href="https://ir4u.info/">
                    <img src={require('../../assets/images/ir4u4.png')} alt="logo" />
                    <p>IR4U.info</p>
                </a>
            </div>
            <ul role="tablist" className="side-menu-nav">
                {ChatNavValues.map((val, id) => {
                    if(val.id !== 6) {
                        return (
                            <li key={id} 
                                className={`side-nav-item ${navMenuItemActive === id ? 'activeMenuItem' : ""}`}
                                id={val.alttitle}
                            >
                                <a href={void(0)} 
                                    id="pills-chat-tab" 
                                    role="tab" 
                                    data-tip 
                                    data-for={val.alttitle} 
                                    className={`nav-link ${navMenuItemActive === id ? "active" : ""}`}
                                >
                                    {navMenuItemActive === id ? 
                                        <img src={val.imgActive} alt={val.alttitle} className={(val.imgActive === NotNavImgActive ? 'icon-animation' : '')} /> : 
                                        <img src={val.img} alt={val.alttitle}  />
                                    }
                                </a>
                                <span className="ir-nav-tooltip">{val.alttitle} {initials}</span>
                            </li>
                        )
                    }
                })}
                <li className="side-nav-item" id="Profile">
                    <a href={void(0)} id="pills-setting-tab" role="tab" className="nav-link user-img-replace-txt">
                        <p style={{ backgroundColor: backgroundColor }}>SD</p>
                    </a>
                    <span className="ir-nav-tooltip">Profile</span>
                </li>
                <li className="side-nav-item">
                    <a href="/" id="pills-setting-tab" role="tab" className="nav-link">
                        <img src={require('../../assets/images/log-nav.png')} alt="Logout" /> 
                    </a>
                    <span className="ir-nav-tooltip">Logout</span>
                </li>
            </ul>
        </div>
    );
}

export default ChatNavigation;



