import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useGlobalContext } from '../../AppContext';
import { useAuthContext } from '../../AuthContext';

export function Header() {
  const { config } = useGlobalContext();

  return (
    <div className="p-5 bg-gray-700 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-[800] text-white">PROJECT-X</div>
        <div className="flex items-center justify-between">
          <w3m-button size="md" balance="hide" />
        </div>
      </div>
    </div>
  );
}
