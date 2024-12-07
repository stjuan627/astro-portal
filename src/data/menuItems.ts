export interface MenuItem {
  href: string;
  icon: string;
  label: string;
}

export const menuItems: MenuItem[] = [
  {
    href: '/trending',
    icon: 'ph ph-trend-up',
    label: 'Trending Games'
  },
  {
    href: '/hot',
    icon: 'ph ph-fire',
    label: 'Hot Games'
  },
  {
    href: '/driving',
    icon: 'ph ph-car',
    label: 'Driving Games'
  },
  {
    href: '/racing',
    icon: 'ph ph-flag-checkered',
    label: 'Racing Games'
  }
]; 