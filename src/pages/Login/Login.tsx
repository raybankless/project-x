import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useGlobalContext } from '../../AppContext';
import { useAuthContext } from '../../AuthContext';

export function Login() {
  const { config } = useGlobalContext();
  const { user, setUser } = useAuthContext();

  const handleLogin = () => {
    setUser(true);
    console.log('setUser');
  };

  useEffect(() => {
    console.log('user:', user);
  }, [user]);

  return (
    <>
      <div onClick={handleLogin}>Login</div>
    </>
  );
}
