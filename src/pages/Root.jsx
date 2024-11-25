import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/layouts/SearchBar';
import Navigation from '../components/layouts/Navigation';

export default function Root() {
  return (
    <div>
      <SearchBar />
      <Navigation />
      <Outlet />
    </div>
  );
}
