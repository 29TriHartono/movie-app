import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import PopularMovie from '../pages/PopularMovie';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/popular" element={<PopularMovie />} />
      </Routes>
    </>
  );
};

export default Routers;
