import React from 'react';
import Link from 'next/link';
import Avvvatars from 'avvvatars-react';
import {
  FiHome,
  FiCheckSquare,
  FiBarChart2,
  FiSliders,
  FiUsers,
  FiCrosshair,
  FiLayers,
  FiPlus,
  FiMoreHorizontal,
} from 'react-icons/fi';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';

const NAV_ITEMS = [
  {
    name: 'Home',
    href: '/',
    icon: FiHome,
  },
  {
    name: 'Dashboard',
    href: '/',
    icon: FiBarChart2,
  },
  {
    name: 'Projects',
    href: '/',
    icon: FiLayers,
  },
  {
    name: 'My Tasks',
    href: '/',
    icon: FiCheckSquare,
  },
  {
    name: 'Members',
    href: '/',
    icon: FiUsers,
  },
  {
    name: 'Goals',
    href: '/',
    icon: FiCrosshair,
  },
  {
    name: 'Settings',
    href: '/',
    icon: FiSliders,
  },
];

const PROJECTS = [
  {
    name: 'Astro World',
    href: '/',
  },
  {
    name: 'This Is Us',
    href: '/',
  },
  {
    name: 'As You Are',
    href: '/',
  },
  {
    name: 'The Life of Pablo',
    href: '/',
  },
];

export const Sidebar = () => {
  return (
    <aside className="h-full basis-64 pt-6">
      <div className="flex h-full flex-col">
        <LogoAndMenu />
        <NavItems />
        <Collections />
        <AddNewCollection />
      </div>
    </aside>
  );
};

const Collections = () => {
  return (
    <div className="mt-4 grow divide-y divide-white divide-opacity-5 overflow-y-auto border border-white border-opacity-5">
      <Collection name="Projects" />
      <Collection name="Favorites" />
      <Collection name="Channels" />
      <Collection name="Portfolio" />
    </div>
  );
};

interface CollectionProps {
  name: string;
}

const Collection = ({ name }: CollectionProps) => {
  const id = React.useId();

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={id}>
        <AccordionTrigger className="group px-6 text-xs font-medium text-white text-opacity-60">
          <div className="flex w-full items-center justify-between pr-3">
            <span>{name}</span>
            <div className="opacity-0 duration-300 group-hover:opacity-100">
              <FiPlus size={14} />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            {PROJECTS.map(({ name, href }) => {
              return (
                <Link
                  key={name}
                  href={href}
                  className="group flex items-center justify-between gap-3 bg-transparent p-2 py-2 px-6 text-xs font-medium capitalize tracking-wider text-white  text-opacity-60 duration-300 hover:bg-white hover:bg-opacity-5 hover:text-opacity-95"
                >
                  <span className="flex items-center gap-2">
                    <span>
                      <Avvvatars
                        size={20}
                        radius={5}
                        value={name}
                        style="shape"
                      />
                    </span>
                    <span>{name}</span>
                  </span>
                  <FiMoreHorizontal
                    size={14}
                    className="opacity-0 duration-300 group-hover:opacity-90"
                  />
                </Link>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const NavItems = () => {
  return (
    <div className="mt-8 -ml-3 flex flex-col gap-1 px-6">
      {NAV_ITEMS.map(({ href, name, icon }) => {
        const Icon = icon;
        return (
          <Link
            href={href}
            key={name}
            className="flex items-center gap-2 rounded-lg border-transparent bg-transparent p-2 px-3 text-xs  font-medium capitalize tracking-wider text-white text-opacity-90 duration-300 hover:bg-white hover:bg-opacity-5"
          >
            <Icon size={18} opacity={0.6} />
            <span>{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

const LogoAndMenu = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-6">
      <Link href="/" className="flex items-center gap-3">
        <Avvvatars value="Logo" style="shape" />
        <span className="text-base font-semibold lowercase tracking-wider">
          Pakt
        </span>
      </Link>
      <button className="-mr-3 -rotate-90 rounded-full bg-transparent p-3 transition-all duration-300 hover:bg-white hover:bg-opacity-5">
        <FiBarChart2 size={18} />
      </button>
    </div>
  );
};

const AddNewCollection = () => {
  return (
    <div className="mt-auto flex items-center justify-center gap-2 border border-white border-opacity-5 py-10 px-6">
      <button className="flex items-center gap-2 rounded-md border border-white border-opacity-5 bg-transparent px-6 py-3 duration-300 hover:bg-white hover:bg-opacity-10">
        <FiPlus size={18} />
        <span className="text-xs font-medium capitalize text-white text-opacity-60">
          Add new group
        </span>
      </button>
    </div>
  );
};
