import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/views/Home'));
const Detail = React.lazy(() => import('@/views/Detail'));
const Entires = React.lazy(() => import('@/views/Entires'));

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/entires',
    element: <Entires />,
  },
];

export default routes;
