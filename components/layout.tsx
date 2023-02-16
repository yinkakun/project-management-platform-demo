import type { ReactElement } from 'react';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';

interface LayoutProps {
  children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-[#161819] text-white">
      <Sidebar />
      <div className="flex grow flex-col">
        <Header />
        <main className="grow border-l border-white border-opacity-10 bg-[#1F2125]">
          {children}
        </main>
      </div>
    </div>
  );
};
