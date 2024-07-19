import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Avatar from "@public/avatar.png";
import logo from "@public/logo.png";
import MiniLogo from "@public/mini Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import OverviewIcon from "@/components/icons/OverviewIcon";
import UserManagementIcon from "@/components/icons/UserManagementIcon";
import FinanceIcon from "@/components/icons/FinanceIcon";
import AcademicIcon from "@/components/icons/AcademicIcon";
import StudentsIcon from "@/components/icons/StudentsIcon";
import CommunicationIcon from "@/components/icons/CommunicationIcon";
import LibraryIcon from "@/components/icons/LibraryIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import HostelIcon from "@/components/icons/HostelIcon";
import ThreeDotsIcon from "@/components/icons/ThreeDotsIcon";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon";
import ExpandableItem from "./ExpandableItem";
import MobileExpandableItem from "./MobileExpandableItem";
import RightArrowIcon from "../icons/RightArrowIcon";


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [isMiniSidebar, setIsMiniSidebar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");


  const toggleItem = (itemName) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [itemName]: !prevState[itemName]
    }));
  };
  const pathname = usePathname()

  const navMap = {
    "/": "Overview",
    "/users": "User Management",
    "/finance": "Finance",
    "/academic": "Academic",
    "/students": "Students",
    "/communications": "Communications",
    "/library": "Library",
    "/hostel": "Hostel",
    "/settings": "Settings"
  };
  
  useEffect(() => {
    setActiveNav(navMap[pathname] || "Overview");
  }, [pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const isAdmin = true;

  const roleType = isAdmin ? "Admin" : "Staff Member";
  const showFullContent = !isMiniSidebar || (isMiniSidebar && isHovered);


  return (
    <>
      <Header className="block md:hidden" onClick={toggleSidebar} />
      <aside
        id="default-sidebar"
        className={`fixed md:hidden top-0 left-0 z-[5] w-[90%] max-h-full min-h-full overflow-y-auto transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 bg-[#F4F1EB]`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
          <div className="w-full">
            <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              type="button"
              className={`inline-block cursor-pointer float-right items-center rounded-md bg-[#E3E3E3] p-2 text-sm md:hidden`}
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 18L6 6"
                  stroke="#CD2424"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="#CD2424"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-y-6 mt-6 p-4">
            <div className="flex items-center gap-4">
                <div>
                  <Link href="/">
                    <Image className="w-[10.9rem] h-[2rem]" src={logo} />
                  </Link>
                </div>
              </div>
            <div>
            <ul className="flex flex-col gap-2 font-medium">
                    <li
                      onClick={() => setActiveNav("Overview")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Overview"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <OverviewIcon />
                        <span className="ms-3 text-base">Overview</span>
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("User Management")}
                      className="py-2"
                    >
                      <Link
                        href="/users"
                        className={`flex items-center rounded-lg ${
                          activeNav === "User Management"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <UserManagementIcon />
                        <span className="ms-3 text-base">User Management</span>
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Finance")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Finance"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <FinanceIcon />
                        <span className="ms-3 text-base">Finance</span>
                      </Link>
                    </li>
                    <MobileExpandableItem
                      name="Academic" 
                      icon={<AcademicIcon />} 
                      subItems={["Sub Academic 1", "Sub Academic 2", "Sub Academic 3"]}
                      expandedItems={expandedItems}
                      toggleItem={toggleItem}
                      setActiveNav={setActiveNav}
                      activeNav={activeNav}
                    />

                    <MobileExpandableItem
                      name="Students" 
                      icon={<StudentsIcon />} 
                      subItems={["Sub Students 1", "Sub Students 2", "Sub Students 3"]}
                      expandedItems={expandedItems}
                      toggleItem={toggleItem}
                      setActiveNav={setActiveNav}
                      activeNav={activeNav}
                    />

                    <li
                      onClick={() => setActiveNav("Communications")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Communications"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <CommunicationIcon />
                        <span className="ms-3 text-base">Communications</span>
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Library")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Library"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <LibraryIcon />
                        <span className="ms-3 text-base">Library</span>
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Hostel")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Hostel"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <HostelIcon />
                        <span className="ms-3 text-base">Hostel</span>
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Settings")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Settings"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <SettingsIcon />
                        <span className="ms-3 text-base">Settings</span>
                      </Link>
                    </li>
              </ul>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div>
                            <Image src={Avatar} className="w-10 h-10 rounded-full object-cover object-top"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-base font-semibold text-[#151515]">Umar Farooq</div>
                            <div className="text-xs font-normal text-[#696969]">{roleType}</div>
                        </div>
                    </div>
                    <div className="cursor-pointer"><ThreeDotsIcon /></div>
                </div>
              </div>
          </div>
        </div>
      </aside>

      <div className="hidden md:block">
        <div className="flex">
          <aside
            id="default-sidebar"
            className={`hidden px-4 py-8 md:block z-[5] ${
                isMiniSidebar && !isHovered
                  ? "md:max-w-[5.5rem] md:min-w-[5.5rem]" 
                  : "md:max-w-[19.5rem] md:min-w-[19.5rem]"
              } min-h-screen max-h-full overflow-y-auto transition-all duration-300 ease-in-out overflow-x-hidden whitespace-nowrap md:translate-x-0`}
            aria-label="Sidebar"
            onMouseEnter={() => isMiniSidebar && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-col gap-16">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-between w-full">
                  <Link href="/">
                    <Image className="w-[10.9rem] h-[2rem]" src={!showFullContent ? MiniLogo : logo} />
                  </Link>
                  <div  onClick={() => setIsMiniSidebar(!isMiniSidebar)} className={`forMiniSidebar ${!isMiniSidebar &&  "hover:bg-[#FFFDFA] active:bg-[#fffdf9] transition-all p-[.38rem] rounded-full"} cursor-pointer`}>
                     {!showFullContent ? <RightArrowIcon /> : <LeftArrowIcon />} 
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 rounded-xl">
                <div>
                  <ul className="flex flex-col gap-2 font-medium">
                    <li
                      onClick={() => setActiveNav("Overview")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Overview"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <OverviewIcon />
                        {showFullContent && <span className="ms-3 text-base">Overview</span>}
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("User Management")}
                      className="py-2"
                    >
                      <Link
                        href="/users"
                        className={`flex items-center rounded-lg ${
                          activeNav === "User Management"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <UserManagementIcon />
                        {showFullContent && <span className="ms-3 text-base">User Management</span>}
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Finance")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Finance"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <FinanceIcon />
                        {showFullContent && <span className="ms-3 text-base">Finance</span>}
                      </Link>
                    </li>
                    <ExpandableItem
                      name="Academic" 
                      icon={<AcademicIcon />} 
                      subItems={["Sub Academic 1", "Sub Academic 2", "Sub Academic 3"]}
                      expandedItems={expandedItems}
                      toggleItem={toggleItem}
                      setActiveNav={setActiveNav}
                      activeNav={activeNav}
                      isMiniSidebar={showFullContent}
                    />

                    <ExpandableItem
                      name="Students" 
                      icon={<StudentsIcon />} 
                      subItems={["Sub Students 1", "Sub Students 2", "Sub Students 3"]}
                      expandedItems={expandedItems}
                      toggleItem={toggleItem}
                      setActiveNav={setActiveNav}
                      activeNav={activeNav}
                      isMiniSidebar={showFullContent}
                    />

                    <li
                      onClick={() => setActiveNav("Communications")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Communications"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <CommunicationIcon />
                        {showFullContent && <span className="ms-3 text-base">Communications</span>}
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Library")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Library"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <LibraryIcon />
                        {showFullContent && <span className="ms-3 text-base">Library</span>}
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Hostel")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Hostel"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <HostelIcon />
                        {showFullContent && <span className="ms-3 text-base">Hostel</span>}
                      </Link>
                    </li>
                    <li
                      onClick={() => setActiveNav("Settings")}
                      className="py-2"
                    >
                      <Link
                        href="/"
                        className={`flex items-center rounded-lg ${
                          activeNav === "Settings"
                            ? "text-[#151515] font-semibold"
                            : "text-[#696969]"
                        } group`}
                      >
                        <SettingsIcon />
                        {showFullContent && <span className="ms-3 text-base">Settings</span>}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div>
                            <Image src={Avatar} className="w-10 h-10 rounded-full object-cover object-top"/>
                        </div>
                        {showFullContent && <div className="flex flex-col">
                            <div className="text-base font-semibold text-[#151515]">Umar Farooq</div>
                            <div className="text-xs font-normal text-[#696969]">{roleType}</div>
                        </div>}
                        
                    </div>
                    {showFullContent && <div className="cursor-pointer"><ThreeDotsIcon /></div>}
                    
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
