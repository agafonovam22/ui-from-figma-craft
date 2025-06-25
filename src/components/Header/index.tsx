import React from 'react';
import TopMenu from './TopMenu';
import MidMenu from './MidMenu';
import BottomMenu from './BottomMenu';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-start w-full" role="banner">
      <TopMenu />
      <MidMenu />
      <BottomMenu />
    </header>
  );
};

export default Header;
