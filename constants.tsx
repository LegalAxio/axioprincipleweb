
import { NavItem, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { 
    label: 'Services', 
    href: '#', 
    hasSubmenu: true, 
    submenu: [
      { label: 'ORM', href: '/services/orm' },
      { label: 'Marketing', href: '/services/marketing' }
    ] 
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export const STATS: StatItem[] = [
  { value: '1,00,000+', label: 'links down' },
  { value: '10,00,000+', label: 'crawls' },
];
