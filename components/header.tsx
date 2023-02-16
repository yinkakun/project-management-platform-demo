import React from 'react';
import Avvvatars from 'avvvatars-react';
import { Avatars } from './avatars';
import { IconType } from 'react-icons';

import {
  FiInfo,
  FiChevronDown,
  FiPlus,
  FiBell,
  FiStar,
  FiSearch,
  FiCheck,
} from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between rounded-tl-3xl border-l border-t border-white border-opacity-10 bg-[#1F2125] px-8 pt-6 pb-6">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <Avvvatars size={40} style="shape" value="Le Bond" />
          <div className="flex items-center gap-1">
            <h2 className="font-bold">Avalanche</h2>
            <FiChevronDown />
          </div>
          <div className="flex items-center gap-3 opacity-75">
            <FiInfo />
            <FiStar />
          </div>
          <button className="flex items-center gap-2 rounded-full border border-white border-opacity-10 bg-white bg-opacity-5 px-3 py-1 text-xs duration-300 hover:bg-opacity-10">
            <span className="scale-75 rounded-full bg-green-600 p-1">
              <FiCheck size={10} strokeWidth={2} />
            </span>
            <span>According to plan</span>
            <span>
              <FiChevronDown />
            </span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Avatars />
          <SearchBar />

          <button className="rounded-full bg-purple-500 p-2 text-white duration-300 hover:bg-purple-600">
            <FiPlus className="h-6 w-6" />
          </button>

          <button className="duration-200 hover:opacity-80">
            <AiOutlineQuestionCircle className="h-5 w-5" />
          </button>

          <button className="duration-200 hover:opacity-80">
            <FiBell className="h-5 w-5" />
          </button>

          <Avvvatars size={40} style="shape" value="Master Lee" />
        </div>
      </div>
    </header>
  );
};

const SearchBar = () => {
  const id = React.useId();

  return (
    <form className="relative min-w-[250px]">
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <input
        id={id}
        type="search"
        placeholder="Search"
        className="block w-full appearance-none rounded-full border border-white border-opacity-30 bg-transparent py-2 px-4  pl-10 text-sm leading-normal duration-300 placeholder:text-xs hover:border-opacity-70 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-0 focus:ring-offset-gray-100"
      />
      <div>
        <FiSearch
          className="absolute top-[10px] left-3 h-5 w-5 text-gray-400"
          strokeWidth={1.5}
        />
      </div>
    </form>
  );
};
