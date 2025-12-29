
export interface SubmenuItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: SubmenuItem[];
}

export interface StatItem {
  value: string;
  label: string;
}
