import { lazy } from 'react';

// import OvaTemplatep04 from '@/pages/ova-template-p04';
import { OvaPageKind, type RouteType } from '../types/types';

/* eslint-disable react-refresh/only-export-components */
export const OvaTemplatep01 = lazy(() => import('../pages/ova-template-p01'));

// Rutas
export const paths: RouteType[] = [
  {
    title: 'Bienvenida',
    component: <OvaTemplatep01 />,
    kind: OvaPageKind.START
  }
];
