import React from "react";
import './CustomTab.scss'

const CustomTabs = ({ active, onChange, children }) => {
  return (
    <>
      <div className="ir-customtabs-main-container ir-ws-flex ">
        {children.map((c, index) => (
          <a
            key={index}
            href={void(0)} 
            onClick={() => onChange(index)}
            className={`ir-customa-tabs-link ${active === index ? "activeTab" : ""}`}
          >
            {c.props.title}
          </a>
        ))}
      </div>
      <div className="ir-customtabs-child-container">{children[active]}</div>
    </>
  );
};

export default CustomTabs;