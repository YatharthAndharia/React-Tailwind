import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import MenuList from '../helpercomponents/MenuList';

export default function Header({ menuToggle, toggleMenu }) {
  return (
    <div className="bg-black p-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <div className="text-3xl text-white font-bold">Yatharth</div>
        {menuToggle ? (
          <AiOutlineMenu
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl"
          ></AiOutlineMenu>
        ) : (
          <AiOutlineClose
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl"
          ></AiOutlineClose>
        )}
        <MenuList
          ulClassName="hidden md:flex gap-10 text-white"
          aClassname={`hover:border hover:border-white hover:rounded-md hover:px-4 hover:py-1`}
        ></MenuList>
        <MenuList
          ulClassName={`border-t-2 border-[#444444] transition origin-top w-full h-screen md:hidden text-white fixed bg-[#111111] top-[68px] ${
            menuToggle ? 'left-[-100%]' : 'left-[0%]'
          }`}
          liClassname={`p-5`}
          aClassname={`hover:border hover:border-white hover:rounded-md hover:px-4 hover:py-1`}
        ></MenuList>
      </div>
    </div>
  );
}
