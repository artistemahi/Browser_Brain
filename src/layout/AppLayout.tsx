import LandingPage from "../pages/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalPage from "../pages/GlobalPage";
import RenderingPage from "../pages/RenderingPage";
import EventLoop from "../pages/EventLoop";
import AsyncLab from "../pages/AsyncLab";

const AppRoutes = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/home", element: <GlobalPage /> },
  { path: "/event-loop", element: <EventLoop /> },
  { path: "/async-lab", element: <AsyncLab /> },
  { path: "/rendering", element: <RenderingPage /> },
]);

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <RouterProvider router={AppRoutes} />
    </div>
  );
};

export default AppLayout;
