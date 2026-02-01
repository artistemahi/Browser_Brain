import React from 'react'
import LandingPage from '../pages/LandingPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import GlobalPage from '../pages/GlobalPage';
const AppRoutes = createBrowserRouter([
  {path: '/', element: <LandingPage/>},
  {path: '/home', element: <div><GlobalPage/></div>},

  
]);

const AppLayout = () => {
  return (
    <div>
        <RouterProvider router={AppRoutes}/>
    </div>
  )
}

export default AppLayout