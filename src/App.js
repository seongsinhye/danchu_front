// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layouts/Navigation'
import SearchBar from './components/layouts/SearchBar'

export default function Navbar(){
  return(
    <>
      <SearchBar />
      <Navigation />
    </>
  )
}
