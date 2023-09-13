import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { HiHand, HiMenu } from "react-icons/hi";
import { HiPower } from "react-icons/hi2";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleSignOutClick(event:any) {
    event.preventDefault(); // Prevent the default anchor click behavior
    signOut(); // Call your signOut function here
  }

  return (
    <div className="relative ml-3">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="relative flex max-w-xs items-center rounded-full bg-sky-300 text-sm border  p-1"
          id="user-menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <HiPower size={20} className="text-white" />
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute t-0 right-0 z-10 mt-2 w-48 origin-bottom-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="user-menu-item-0"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="user-menu-item-1"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            id="user-menu-item-2"
            onClick={(e)=>handleSignOutClick(e)}
          >
            Sign out
          </a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
