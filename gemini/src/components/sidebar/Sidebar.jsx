import "./sidebar.css";
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

function Sidebar() {
  const [extened, SetExtened] = useState(false);
  const { onSent, prevprompt, setRecentprompt } = useContext(context);
  return (
    <div className="sidebar-container">
      <div className="top">
        <div className="menu">
          <img
            onClick={() => SetExtened((prev) => !prev)}
            src={assets.menu_icon}
            alt=""
          />
        </div>
        <div className="new-chat">
          <img className="menu " src={assets.plus_icon} alt="" />
          {extened ? <p>New chat</p> : null}
        </div>

        {extened ? (
          <>
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevprompt.map((item, index) => {
                return (
                  <div className="recent-entry">
                    <img className="menu " src={assets.message_icon} alt="" />
                    <p>{item}...</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extened ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extened ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extened ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
