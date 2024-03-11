import React, { useEffect, useState } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import axios from 'axios';

import { useGlobalContext } from '../../AppContext';
import { useAuthContext } from '../../AuthContext';

export function Welcome() {
  const { config } = useGlobalContext();
  const { user, setUser } = useAuthContext();

  return (
    <>
      {user.account ? (
        <>
          <Navigate to={'/dashboard'} replace />
        </>
      ) : (
        <div className="container mx-auto min-h-screen py-5">
          <p className="leading-2 mb-5">🌐 Welcome to PROJECT-X - Your Web3.0 Social Network 🌐</p>
          <p className="leading-2 mb-5">
            🚀 Elevate Your Online Connections with the Power of Blockchain! 🚀
          </p>
          <p className="leading-2 mb-5">
            Are you ready to experience a revolutionary social network where innovation, privacy,
            and decentralized technology thrive? PROJECT-X brings you a unique platform harmonizing
            the essence of social connectivity with the transformative potential of Web3.0. Here, a
            universe of endless possibilities opens up!
          </p>
          <p className="leading-2 mb-5">🔗 Connect Your Wallet, Unlock a New Realm 🔗</p>
          <p className="leading-2 mb-5">
            Begin your journey by connecting your digital wallet. It’s your key to unlocking a
            seamless and secure environment where you can interact, share, and explore like never
            before. Your wallet empowers you to control your digital identity, manage transactions,
            and engage with our community with utmost transparency and trust.
          </p>
        </div>
      )}
    </>
  );
}
