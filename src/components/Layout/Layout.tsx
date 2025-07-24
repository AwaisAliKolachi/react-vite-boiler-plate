import React, { useEffect, useRef, useState } from "react";
import { Topbar } from "../Topbar/Topbar";
import { Sidebar } from "../Sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = React.memo(({ children }: LayoutProps) => {
  const [isSidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebarMobile = () => setSidebarMobileOpen((prev) => !prev);
  const toggleSidebarCollapse = () => setSidebarCollapsed((prev) => !prev);
  const toggleProfileDropdown = () => setProfileDropdownOpen((prev) => !prev);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  return (
    <div>
      <Topbar
        toggleSidebarMobile={toggleSidebarMobile}
        toggleSidebarCollapse={toggleSidebarCollapse}
        isSidebarCollapsed={isSidebarCollapsed}
        isProfileDropdownOpen={isProfileDropdownOpen}
        toggleProfileDropdown={toggleProfileDropdown}
        profileRef={profileRef}
      />
      <Sidebar
        isOpen={isSidebarMobileOpen}
        isCollapsed={isSidebarCollapsed}
        sidebarRef={sidebarRef}
      />
      <main
        className={`pt-20 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "sm:ml-20" : "sm:ml-64"
        } p-4`}
      >
        {children}
      </main>
    </div>
  );
});
