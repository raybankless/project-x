import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Link, Route, Routes } from 'react-router-dom';

import { useGlobalContext } from '../../AppContext';
import { Menu } from '../../components/Menu/Menu';

export function Dashboard() {
  const { config } = useGlobalContext();

  return (
    <div className="container mx-auto min-h-screen">
      <div className="grid grid-cols-5 gap-3">
        <div>
          <Menu />
        </div>
        <div className="col-span-3">
          <div className="bg-gray-200 p-5 min-h-screen">
            <div>New Post</div>
            <div>
              <div>Feed</div>
              <div>
                <div>POST#1</div>
                <div>POST#2</div>
                <div>POST#3</div>
                <div>POST#4</div>
                <div>POST#5</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div>
              <div>Most Viewed Events</div>
              <div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
              </div>
            </div>
            <div>
              <div>Trending Communities</div>
              <div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
                <div>Some Here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
