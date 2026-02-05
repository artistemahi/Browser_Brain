import React from 'react'
import LandingPage from '../pages/LandingPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import GlobalPage from '../pages/GlobalPage';
import RenderingPage from '../pages/RenderingPage';
const AppRoutes = createBrowserRouter([
  {path: '/', element: <LandingPage/>},
  {path: '/home', element: <div><GlobalPage/></div>},
  {path: '/event-loop', element: <div>Event Loop Page</div>},
  {path: '/async-lab', element: <div>Async Lab Page</div>},
  {path: '/rendering', element: <div><RenderingPage/></div>},
  {path: '/performance', element: <div>Performance Page</div>},

  
]);

const AppLayout = () => {
  return (
    <div>
        <RouterProvider router={AppRoutes}/>
    </div>
  )
}

export default AppLayout