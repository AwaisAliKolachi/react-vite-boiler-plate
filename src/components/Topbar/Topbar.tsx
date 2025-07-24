// import { Icons } from "@src/assets/icons";
import { Icons } from "@src/assets";
import React from "react";
import { Link } from "react-router-dom";

type TopbarProps = {
  toggleSidebarMobile: () => void;
  toggleSidebarCollapse: () => void;
  isSidebarCollapsed: boolean;
  isProfileDropdownOpen: boolean;
  toggleProfileDropdown: () => void;
  profileRef: React.RefObject<HTMLDivElement | null>;
};

export const Topbar = React.memo(
  ({
    toggleSidebarMobile,
    toggleSidebarCollapse,
    isProfileDropdownOpen,
    toggleProfileDropdown,
    isSidebarCollapsed,
    profileRef,
  }: TopbarProps) => {
    return (
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Mobile menu toggle */}
              <button
                onClick={toggleSidebarMobile}
                type="button"
                className="inline-flex sm:hidden items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              >
                <img className="w-6 h-6" src={Icons.ChevronRight} />
              </button>

              {/* Desktop collapse toggle */}
              <button
                onClick={toggleSidebarCollapse}
                type="button"
                className="hidden sm:inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              >
                <div
                  className={`transition-transform duration-300 transform ${
                    isSidebarCollapsed ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img className="w-6 h-6" src={Icons.ChevronLeft} />
                </div>
              </button>

              <Link to={"/"} className="flex items-center ms-2">
                <img className="h-8 w-auto" src={Icons.ReactIcon} alt="Logo" />
              </Link>
            </div>

            {/* Profile */}
            <div ref={profileRef} className="relative flex items-center ms-3">
              <button
                onClick={toggleProfileDropdown}
                type="button"
                className="flex text-sm bg-gray-100 rounded-full focus:ring-4 focus:ring-gray-300"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user"
                />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 top-12 z-50 w-48 py-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
);
