import './App.css';
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Guide from './components/Guide';
import Accounting from './components/Accounting';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import Root from './components/Root';
import { useState } from 'react';



const router = createBrowserRouter(

  [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/guide',
        element: <Guide/>
      },
      {
        path: '/accounting',
        element: <Accounting/>
      },
      {
        path: '/personalaccount',
        element: <PersonalAccount/>        
      }

    ]
  }
])



function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
