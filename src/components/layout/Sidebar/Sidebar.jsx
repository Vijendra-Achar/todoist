import React from 'react';

import { VscInbox, VscCalendar, VscBrowser, VscChevronDown } from 'react-icons/vsc';

import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__primary">
          <div className="sidebar__category">
            <span>
              <VscInbox className="sidebar__icon inbox" />
            </span>
            <span className="sidebar__label">Inbox</span>
          </div>

          <div className="sidebar__category">
            <span>
              <VscBrowser className="sidebar__icon" />
            </span>
            <span className="sidebar__label">Today</span>
          </div>

          <div className="sidebar__category">
            <span>
              <VscCalendar className="sidebar__icon" />
            </span>
            <span className="sidebar__label">Upcoming</span>
          </div>
        </div>

        <div className="sidebar__projects">
          <div className="sidebar__projects-title">
            <VscChevronDown />
            <h2>Projects</h2>
          </div>
          <ul className="sidebar__projects-list">Projects list here!!!</ul>
        </div>
      </div>
    </div>
  );
};
