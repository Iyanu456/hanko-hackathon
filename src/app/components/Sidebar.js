import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import moreIcon from "../assets/icons/more.svg";
import logoutIcon from "../assets/icons/logout.svg";
import profileIcon from "../assets/icons/profile-circle.svg";
import addIcon from "../assets/icons/add.svg";

export default function Sidebar(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  return (
    <aside className={`fixed top-0 bottom-0 right-auto left-0 h-[100%] px-[1em] ${props.sidebarClass}`}>
      <button className="flex justify-center center-align gap-2 px-[1.4em] py-[0.6em] mt-[3em] w-[100%] new-chat-button"><p>New Chat</p><Image src={addIcon} alt="Add new chat button" className="icon" /></button>
      <div
        ref={menuRef} // Add a ref to the menu div
        onClick={() => { menuVisible ? setMenuVisible(false) : setMenuVisible(true)}}
        className="absolute flex top-auto bottom-[2em] gap-[1em] w-[87%] right-[1.8em] left-[1.2em] profile py-3"
      >
        <div className="grid place-items-center h-[35px] w-[35px] rounded-md profile-circle ml-3 my-auto">I</div>
        <h3 className="my-auto text-white">Iyanu</h3>
        <Image src={moreIcon} alt="more icon" className="icon mr-4 ml-auto" />
      </div>
      {menuVisible && 
        <div className="absolute bottom-[6.2em] left-[1.2em] w-[87%] grid dialogue">
          <div className="flex gap-[1em] py-4 px-4" onClick={() => {
            props.onProfile()
            setMenuVisible(false)}}>
            <Image src={profileIcon} alt="Profile icon" className="icon" />
            <p className="text-white my-auto">Profile</p>
          </div>
          <div className="flex gap-[1em] py-4 px-4" onClick={() => {
            props.onLogout()
            setMenuVisible(false)}}>
            <Image src={logoutIcon} alt="logout button" className="icon" />
            <p className="text-white my-auto">Logout</p>
          </div>
        </div>}
    </aside>
  );
}