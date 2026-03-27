
import LandingPage from '../pages/LandingPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import GlobalPage from '../pages/GlobalPage';
import RenderingPage from '../pages/RenderingPage';
import EventLoop from "../pages/EventLoop";
const AppRoutes = createBrowserRouter([
  {path: '/', element: <LandingPage/>},
  {path: '/home', element: <div><GlobalPage/></div>},
  {path: '/event-loop', element: <div><EventLoop/></div>},
  {path: '/async-lab', element: <div>Async Lab Page</div>},
  {path: '/rendering', element: <div><RenderingPage/></div>},
 
  
]);

const AppLayout = () => {
  return (
    <div>
        <RouterProvider router={AppRoutes}/>
    </div>
  )
}

export default AppLayout