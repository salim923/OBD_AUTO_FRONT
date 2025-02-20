import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { AuthGuard } from '../guards/auth.guard';
import {GoogleRedirectComponent} from "./services/google-redirect/google-redirect.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'services',
    loadComponent: () => import('./views/pages/services/services.component').then(m => m.ServicesComponent),
    data: {
      title: 'Services'
    }
  },
  {
    path: 'pricing',
    loadComponent: () => import('./views/pages/pricing/pricing.component').then(m => m.PricingComponent),
    data: {
      title: 'Pricing'
    }
  },
  {
    path: 'garages',
    loadComponent: () => import('./views/pages/garages/garages.component').then(m => m.GaragesComponent),
    data: {
      title: 'Garages'
    }
  },
  {
    path: 'google-redirect',
    loadComponent: () => import('./services/google-redirect/google-redirect.component').then(m => m.GoogleRedirectComponent),
    data: {
      title: 'Google-redirect'
    }
  },
  {
    path: 'features',
    loadComponent: () => import('./views/pages/features/features.component').then(m => m.FeaturesComponent),
    data: {
      title: 'Features'
    }
  },
  {
    path: 'about-us',
    loadComponent: () => import('./views/pages/about-us/about-us.component').then(m => m.AboutUsComponent),
    data: {
      title: 'About-us'
    }
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        component: DefaultLayoutComponent,
        data: {
          title: 'Home'
        },
        children: [
          {
            path: 'dashboard',
            loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
          },
          {
            path: 'theme',
            loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
          },
          {
            path: 'base',
            loadChildren: () => import('./views/base/routes').then((m) => m.routes)
          },
          {
            path: 'buttons',
            loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
          },
          {
            path: 'forms',
            loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
          },
          {
            path: 'icons',
            loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
          },
          {
            path: 'notifications',
            loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
          },
          {
            path: 'widgets',
            loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
          },
          {
            path: 'charts',
            loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
          },
          {
            path: 'pages',
            loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
          }
        ]
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  { path: '**', redirectTo: '' }
];
