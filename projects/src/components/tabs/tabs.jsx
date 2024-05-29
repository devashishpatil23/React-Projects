import { useState } from "react";

export default function Tabs({ content, onChange }) {
  const [currentTab, setCurrentTab] = useState(0);
  const handleOnClick = (idx) => {
    setCurrentTab(idx);
    onChange(idx);
  };
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {content.map((tabItem, index) => (
          <div
          
            onClick={() => handleOnClick(index)}
            className={`label ${currentTab === index? 'label active': ''}`}
            key={tabItem.label}
          >
            {tabItem.label}
          </div>
        ))}
      </div>
      <div className="content">
        {content[currentTab] && content[currentTab].content}
      </div>
    </div>
  );
}
