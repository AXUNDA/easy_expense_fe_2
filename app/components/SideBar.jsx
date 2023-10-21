"use client";

//import useState hook to create menu collapse state
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import { TfiReceipt } from "react-icons/tfi";
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

import { BiCog } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";

const SideBar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <Image src={logo} alt="logo" />
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<MdOutlineDashboardCustomize />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<TfiReceipt />}>Receipts</MenuItem>
              <MenuItem icon={<BiMoneyWithdraw />}>Expenses</MenuItem>
              <MenuItem icon={<TbReportAnalytics />}>Expense Report</MenuItem>
              <MenuItem active={true} icon={<BiCog />}>
                Settings <span className="settingsNotification">1</span>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
