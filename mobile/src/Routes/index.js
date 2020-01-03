import React from 'react';
import { useSelector } from 'react-redux';

import creatRoutes from './authRoutes';

export default function App() {
  const signed = useSelector(state => state.user.signed);
  const Routes = creatRoutes(signed);
  return <Routes />;
}
