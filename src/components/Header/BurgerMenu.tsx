import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavigationItem } from './types';

interface BurgerMenuProps {
  navigationItems: NavigationItem[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Burger button */}
      <button
        onClick={toggleMenu}
        className="md:flex lg:hidden items-center justify-center w-8 h-8 text-white hover:bg-white/10 rounded transition-colors"
        aria-label="Открыть меню"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:block lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#17171E] border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:block lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-white font-benzin text-sm">Меню</h3>
          <button
            onClick={closeMenu}
            className="text-white hover:bg-white/10 p-2 rounded transition-colors"
            aria-label="Закрыть меню"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="p-4">
          <ul className="space-y-3">
            {navigationItems.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="block text-[#778093] hover:text-white transition-colors py-2 font-benzin text-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href || '#'}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                      closeMenu();
                    }}
                    className="block text-[#778093] hover:text-white transition-colors py-2 font-benzin text-sm"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;