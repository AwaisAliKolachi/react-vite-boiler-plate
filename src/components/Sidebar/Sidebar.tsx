import React from "react";
import { Link } from "react-router-dom";

type SideBarProps = {
  isOpen: boolean;
  isCollapsed: boolean;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
};

export const Sidebar = React.memo(
  ({ isOpen, isCollapsed, sidebarRef }: SideBarProps) => {
    return (
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 h-screen pt-20 transition-all duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        ${isCollapsed ? "sm:w-20" : "sm:w-64"} 
        bg-white border-r border-gray-200 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {[
              { name: "Dashboard", icon: "dashboard", badge: "", link: "/" },
              { name: "Users", icon: "users", badge: "", link: "/users" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-black group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                  {!isCollapsed && (
                    <>
                      <span className="ms-3">{item.name}</span>
                      {item.badge && (
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
);
