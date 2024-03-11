import React, { useEffect, useState } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import axios from 'axios';
import { useAccount } from 'wagmi';
import { useGlobalContext } from '../../AppContext';
import { Dashboard } from '../../pages/Dashboard';
import { Welcome } from '../../pages/Welcome';
import { Footer } from '../Footer';
import { Header } from '../Header';

import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { useAuthContext } from '../../AuthContext';

interface PropsProtectedRoute {
  redirectPath?: any;
}

const ProtectedRoute = ({ redirectPath = '/' }: PropsProtectedRoute) => {
  const { user } = useAuthContext();
  console.log(user);
  if (!user.account) {
    console.log('you are not authorized');
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export function Layout() {
  const { isConnected, address } = useAccount();
  const { config, setConfig } = useGlobalContext();
  const { user, setUser } = useAuthContext();

  useEffect(() => {
    setUser(isConnected ? { account: address } : {});
  }, [isConnected]);

  useEffect(() => {
    setConfig(true);
  }, []);

  function renderLayoutContent() {
    const renderContent = (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </>
    );

    return (
      <>
        <ReactNotifications />
        <div className="content-wrapper">
          <div className="content">{renderContent}</div>
        </div>
      </>
    );
  }

  return <>{config && renderLayoutContent()}</>;
}
