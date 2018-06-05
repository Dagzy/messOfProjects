import React from 'react';
import Home from '../home/Home';
import Gear from '../gear/Gear'

export const routes = [
    {
        path: '/' || '/home',
        exact: true,
        sidebar: () => <div>Home</div>,
        main: () => <Home/>
    }, 
    {
        path: '/gearchecker',
        exact: true,
        sidebar: () => <div>Gears</div>,
        main: () => <Gear/>
    }
]