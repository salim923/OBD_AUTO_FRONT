import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-dashboard' }
  },
  {
    name: 'History',
    url: '/history',
    iconComponent: { name: 'cil-history' }
  },
  {
    name: 'Vehicule',
    url: '/vehicule',
    iconComponent: { name: 'cil-car' }
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' }
  },
  {
    name: 'Profile',
    url: '/profile',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Garages',
    url: '/garages',
    iconComponent: { name: 'cil-garage' }
  }
];
