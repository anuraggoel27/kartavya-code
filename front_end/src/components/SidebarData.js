import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';
import * as SiIcons from 'react-icons/si';

const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="sidebar-icon"/>,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/About",
    icon:<AiIcons.AiFillInfoCircle className="sidebar-icon"/>,
    cName: "nav-text"
  },
  {
    title: "Study Material",
    path: "/StudyMaterial",
    icon: <FaIcons.FaBook className="sidebar-icon"/>,
    cName: "nav-text"
  },
  {
    title: "Gallery",
    path: "/Gallery",
    icon: <HiIcons.HiPhotograph className="sidebar-icon"/>,
    cName: "nav-text"
  },
  {
    title: "Contact Us",
    path: "/Contact",
    icon: <AiIcons.AiFillContacts className="sidebar-icon"/>,
    cName: "nav-text"
  },
  {
    title: "Achievers",
    path: "/achievement",
    icon: <SiIcons.SiGooglescholar className="sidebar-icon"/>,
    cName: "nav-text"
  },
  {
    title:"Courses",
    path:"/Courses",
    icon :<RiIcons.RiBookFill className="sidebar-icon"/>,
    cName:"nav-text"
    
  },
  {
    title:"Admin",
    path:"/Admin",
    icon :<RiIcons.RiAdminFill className="sidebar-icon"/>,
    cName:"nav-text"
    
  }
];

export default sidebarData;
