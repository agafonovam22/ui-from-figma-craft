
import React from 'react';
import TopMenu from './Header/TopMenu';
import MidMenu from './Header/MidMenu';
import BottomMenu from './Header/BottomMenu';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="w-full bg-[#17171E] max-w-[1920px] mx-auto">
      <TopMenu />
      <MidMenu onSearch={onSearch} />
      <BottomMenu />
    </header>
  );
};

export default Header;
