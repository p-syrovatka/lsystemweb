import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../Components/Transition';
import MainPage from '../views/MainPage';
import QuickGuidePage from '../views/QuickGuidePage';
import TheoryPage from '../views/TheoryPage';


const RouterComp = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <MainPage />
            </TransitionComponent>
          }
        />
        <Route
          path="/Theory"
          element={
            <TransitionComponent>
              <TheoryPage />
            </TransitionComponent>
          }
        />
        <Route
          path="/QuickGuide"
          element={
            <TransitionComponent>
              <QuickGuidePage />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default RouterComp;
