import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchBarProps, UserAction } from './types';
import SearchPopup from './SearchPopup';
import CartPopup from './CartPopup';
import FavoritesPopup from './FavoritesPopup';
import ComparisonPopup from './ComparisonPopup';

const Logo: React.FC = () => (
  <Link to="/" className="flex justify-center items-center gap-[5.856px] flex-shrink-0">
    <img 
      src="/lovable-uploads/989588d0-dab0-48b9-9268-db2cc02cf4da.png" 
      alt="Well Fitness" 
      className="h-[32px] w-auto"
    />
  </Link>
);

const CatalogButton: React.FC = () => (
  <Link
    to="/catalog"
    className="flex justify-center items-center gap-2 bg-[#F53B49] px-5 py-3 rounded-[5px] hover:bg-[#e63946] transition-colors whitespace-nowrap h-[41px] flex-shrink-0"
    aria-label="Открыть каталог товаров"
  >
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H3V3H0V0Z" fill="white" />
      <path d="M5 0H8V3H5V0Z" fill="white" />
      <path d="M10 0H13V3H10V0Z" fill="white" />
      <path d="M0 5H3V8H0V5Z" fill="white" />
      <path d="M5 5H8V8H5V5Z" fill="white" />
      <path d="M10 5H13V8H10V5Z" fill="white" />
      <path d="M0 10H3V13H0V10Z" fill="white" />
      <path d="M5 10H8V13H5V10Z" fill="white" />
      <path d="M10 10H13V13H10V10Z" fill="white" />
    </svg>
    <span className="text-white text-sm font-normal leading-[14px]">Каталог</span>
  </Link>
);

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Поиск", onSearch, className = "" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <div
        className={`flex h-[41px] justify-between items-center bg-[#262631] pl-5 pr-4 py-3.5 rounded-[5px] max-w-[700px] ${className}`}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-white text-sm font-normal leading-[14px] outline-none placeholder:text-[#5C6476]"
        />
        <button
          type="button"
          onClick={handleSearchClick}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
        >
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1423 19.23L16.8993 15.987C17.8882 14.6978 18.4233 13.1179 18.4213 11.493C18.4213 9.50803 17.6483 7.64253 16.2448 6.23903C15.5565 5.54685 14.7377 4.99808 13.8358 4.62448C12.934 4.25089 11.967 4.05988 10.9908 4.06253C9.00633 4.06253 7.14083 4.83553 5.73683 6.23903C2.84033 9.13603 2.84033 13.85 5.73683 16.747C6.42515 17.4392 7.24394 17.988 8.14579 18.3616C9.04765 18.7352 10.0147 18.9262 10.9908 18.9235C12.6378 18.9235 14.1983 18.384 15.4853 17.401L18.7283 20.6445C18.9233 20.8395 19.1793 20.9375 19.4353 20.9375C19.6913 20.9375 19.9473 20.8395 20.1423 20.6445C20.2352 20.5517 20.3089 20.4414 20.3592 20.3201C20.4095 20.1987 20.4354 20.0686 20.4354 19.9373C20.4354 19.8059 20.4095 19.6759 20.3592 19.5545C20.3089 19.4331 20.2352 19.3229 20.1423 19.23ZM7.15133 15.333C5.03383 13.2155 5.03433 9.77053 7.15133 7.65303C7.65451 7.14732 8.25298 6.74641 8.9121 6.47349C9.57123 6.20057 10.2779 6.06106 10.9913 6.06303C11.7046 6.06107 12.4113 6.20058 13.0703 6.47351C13.7294 6.74643 14.3277 7.14733 14.8308 7.65303C15.3367 8.15613 15.7377 8.75458 16.0107 9.41371C16.2837 10.0728 16.4233 10.7796 16.4213 11.493C16.4213 12.9435 15.8563 14.307 14.8308 15.333C13.8053 16.359 12.4418 16.923 10.9908 16.923C9.54083 16.923 8.17683 16.358 7.15083 15.333H7.15133Z" fill="#5C6476" />
          </svg>
        </button>
      </div>
    </form>
  );
};

const UserActions: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 max-sm:gap-2.5 flex-shrink-0">
      <Link
        to="/account"
        className="w-6 h-6 relative"
        aria-label="Профиль пользователя"
      >
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-0.5">
          <path d="M8.99998 8.89216C7.87083 8.89216 6.91354 8.49946 6.12813 7.71406C5.34271 6.92865 4.95 5.97136 4.95 4.84221C4.95 3.71305 5.34271 2.75576 6.12813 1.97036C6.91354 1.18494 7.87083 0.792236 8.99998 0.792236C10.1291 0.792236 11.0864 1.18494 11.8718 1.97036C12.6572 2.75576 13.05 3.71305 13.05 4.84221C13.05 5.97136 12.6572 6.92865 11.8718 7.71406C11.0864 8.49946 10.1291 8.89216 8.99998 8.89216ZM0.75 18.3325V15.3345C0.75 14.7281 0.901241 14.18 1.20372 13.6901C1.50621 13.2002 1.91009 12.824 2.41537 12.5614C3.47051 12.0268 4.55019 11.6259 5.65443 11.3586C6.75864 11.0913 7.87306 10.9576 8.99767 10.9576C10.1223 10.9576 11.2375 11.0913 12.3432 11.3586C13.449 11.6259 14.5294 12.0268 15.5846 12.5614C16.0899 12.824 16.4937 13.2002 16.7962 13.6901C17.0987 14.18 17.25 14.7281 17.25 15.3345V18.3325H0.75Z" fill="white" />
        </svg>
        <div className="flex w-2.5 h-2.5 flex-col justify-center items-center gap-[2.344px] shrink-0 absolute bg-[#F53B49] p-[0.938px] rounded-[23.438px] border-[1.25px] border-solid border-[#17171E] left-3.5 top-3.5" />
      </Link>

      <CartPopup isOpen={isCartOpen} onOpenChange={setIsCartOpen}>
        <button aria-label="Корзина" className="flex items-center justify-center w-6 h-6">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.02706 17.0577C4.60059 17.0577 4.23784 16.9085 3.93879 16.6101C3.63975 16.3118 3.49024 15.9508 3.49024 15.5268C3.49024 15.1029 3.63999 14.7409 3.9395 14.4409C4.23901 14.1408 4.60192 13.9917 5.02839 13.9917C5.45487 13.9917 5.81763 14.1408 6.11667 14.4401C6.41571 14.7395 6.56521 15.1004 6.56521 15.5244C6.56521 15.9483 6.41547 16.3103 6.11595 16.6104C5.81644 16.9104 5.45353 17.0577 5.02706 17.0577ZM12.7463 17.0577C12.3198 17.0577 11.957 16.9085 11.658 16.6101C11.359 16.3118 11.2095 15.9508 11.2095 15.5268C11.2095 15.1029 11.3592 14.7409 11.6587 14.4409C11.9582 14.1408 12.3212 13.9917 12.7476 13.9917C13.1741 13.9917 13.5369 14.1408 13.8359 14.4401C14.135 14.7395 14.2845 15.1004 14.2845 15.5244C14.2845 15.9483 14.1347 16.3103 13.8352 16.6104C13.5357 16.9104 13.1728 17.0577 12.7463 17.0577ZM3.67195 3.55005H15.0979C15.3985 3.55005 15.6258 3.66806 15.7799 3.90408C15.9338 4.14017 15.9335 4.37926 15.7786 4.6135L12.9508 9.7923C12.8152 10.0231 12.6246 10.201 12.379 10.3259C12.1336 10.4508 11.8648 10.5135 11.5719 10.5135H5.92484L5.28156 11.6731C5.24310 11.75 5.24190 11.8125 5.27796 11.8599C5.31402 11.9073 5.36811 11.9308 5.44022 11.9308H14.3219V13.5135H5.02772C4.42774 13.5135 3.98639 13.2339 3.70369 12.6752C3.42101 12.1164 3.41524 11.5598 3.68639 11.0048L4.68160 8.93077L1.95274 3.66H0.412354V2.07505H2.95945L3.67195 3.55005Z" fill="#5C6476" />
          </svg>
        </button>
      </CartPopup>

      <ComparisonPopup isOpen={isComparisonOpen} onOpenChange={setIsComparisonOpen}>
        <button aria-label="Сравнение">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.08496 21.7999V9.19995H7.56184V21.7999H2.08496ZM9.16569 21.7999V3.19995H14.8349V21.7999H9.16569ZM16.4387 21.7999V11.2H21.9156V21.7999H16.4387Z" fill="#5C6476" />
          </svg>
        </button>
      </ComparisonPopup>

      <FavoritesPopup isOpen={isFavoritesOpen} onOpenChange={setIsFavoritesOpen}>
        <button aria-label="Избранное">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3 22.4769L10.7962 21.0846C8.98849 19.4141 7.51349 18.0009 6.37118 16.8452C5.22887 15.6894 4.33241 14.6775 3.68177 13.8096C3.03112 12.9416 2.58817 12.1477 2.35292 11.4279C2.11764 10.708 2 9.96536 2 9.19998C2 7.59743 2.55353 6.24679 3.66058 5.14808C4.76764 4.04936 6.13078 3.5 7.75 3.5C8.55642 3.5 9.35642 3.68334 10.15 4.05003C10.9436 4.41669 11.6602 4.93977 12.3 5.61925C12.9397 4.93977 13.6564 4.41669 14.45 4.05003C15.2436 3.68334 16.0436 3.5 16.85 3.5C18.4692 3.5 19.8323 4.04936 20.9394 5.14808C22.0464 6.24679 22.6 7.59743 22.6 9.19998C22.6 9.96536 22.4823 10.708 22.2471 11.4279C22.0118 12.1477 21.5689 12.9416 20.9182 13.8096C20.2676 14.6775 19.3727 15.6894 18.2336 16.8452C17.0945 18.0009 15.6179 19.4141 13.8038 21.0846L12.3 22.4769Z" fill="#5C6476" />
          </svg>
        </button>
      </FavoritesPopup>
    </div>
  );
};

const MidMenu: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <section className="flex w-full justify-center items-center bg-[#17171E] px-2 sm:px-4 lg:px-[60px] py-3 max-md:px-5 max-sm:px-4">
      <div className="flex w-full max-w-[1800px] h-[65px] justify-between items-center gap-4 flex-shrink-0">
        <Logo />
        
        <SearchPopup isOpen={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <div className="flex items-center gap-2.5 flex-1 max-w-[750px]" onClick={handleClick}>
            <CatalogButton />
            <SearchBar />
          </div>
        </SearchPopup>
        
        <UserActions />
      </div>
    </section>
  );
};

export default MidMenu;
