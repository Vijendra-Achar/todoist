import React from 'react';

import { FaInbox, FaCalendarDay, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__primary">
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaCalendarDay />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaCalendarAlt />
          </span>
          <span>Upcoming</span>
        </li>
      </ul>

      <div className="sidebar__projects">
        <span>
          <FaChevronDown />
          <h2>Projects</h2>
        </span>
        <ul className="sidebar__projects-list">Projects list here!!!</ul>
        Add project component here!!!
      </div>
    </div>
  );
};
