export interface NavItem {
  href: string;
  icon?: string;
  label: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const mainNavItems: NavItem[] = [
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

export const footerNavGroups: NavGroup[] = [
  {
    title: 'Featured',
    items: mainNavItems.map(({ href, label }) => ({ href, label }))
  },
  {
    title: 'Legal',
    items: [
      {
        href: '/terms',
        label: 'Terms of Service'
      },
      {
        href: '/privacy',
        label: 'Privacy Policy'
      },
      {
        href: '/dmca',
        label: 'DMCA'
      }
    ]
  }
]; 