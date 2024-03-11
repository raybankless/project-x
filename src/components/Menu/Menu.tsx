import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Link, Route, Routes } from 'react-router-dom';

import { useGlobalContext } from '../../AppContext';

export function Menu() {
  const { config } = useGlobalContext();

  return (
    <>
      <div>
        <Link
          to={'/dashboard'}
          className="flex gap-5 items-center justify-start text-[24px] leading-[3]"
        >
          <FontAwesomeIcon icon={icon({ name: 'house' })} className="w-[30px]" size="lg" />
          Home
        </Link>
      </div>
      <div>
        <Link
          to={'/dashboard'}
          className="flex gap-5 items-center justify-start text-[24px] leading-[3]"
        >
          <FontAwesomeIcon icon={icon({ name: 'people-group' })} className="w-[30px]" size="lg" />
          Communities
        </Link>
      </div>
      <div>
        <Link
          to={'/dashboard'}
          className="flex gap-5 items-center justify-start text-[24px] leading-[3]"
        >
          <FontAwesomeIcon icon={icon({ name: 'flask' })} className="w-[30px]" size="lg" />
          Events
        </Link>
      </div>
      <div>
        <Link
          to={'/dashboard'}
          className="flex gap-5 items-center justify-start text-[24px] leading-[3]"
        >
          <FontAwesomeIcon icon={icon({ name: 'envelope' })} className="w-[30px]" size="lg" />
          Messages
        </Link>
      </div>
      <div>
        <Link
          to={'/dashboard'}
          className="flex gap-5 items-center justify-start text-[24px] leading-[3]"
        >
          <FontAwesomeIcon icon={icon({ name: 'user' })} className="w-[30px]" size="lg" />
          Profile
        </Link>
      </div>
    </>
  );
}
