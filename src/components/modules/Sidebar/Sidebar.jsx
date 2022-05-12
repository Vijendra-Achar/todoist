import React from "react";

import { BsFillCalendar2EventFill, BsFillCalendarRangeFill } from "react-icons/bs";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <div className="sidebar__section__menu-item">
          <BsFillCalendar2EventFill />
          <p className="sidebar__section__menu-item__title">Today</p>
        </div>
        <div className="sidebar__section__menu-item">
          <BsFillCalendarRangeFill />
          <p className="sidebar__section__menu-item__title">Upcoming</p>
        </div>
      </div>
      <div className="sidebar__section"></div>
      <div className="sidebar__section"></div>
    </div>
  );
};

export default Sidebar;
