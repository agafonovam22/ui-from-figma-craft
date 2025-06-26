
export interface CityButtonProps {
  city: string;
  onClick?: () => void;
}

export interface NavigationItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export interface CategoryItem {
  id: string;
  label: string;
  icon: string;
  iconImage?: string;
  href?: string;
  onClick?: () => void;
}

export interface UserAction {
  icon: string;
  label: string;
  onClick?: () => void;
  badge?: boolean;
}
