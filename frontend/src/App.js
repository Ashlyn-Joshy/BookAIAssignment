import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//components
import Pricing from "./Pages/Pricing";

const AppComponent = () => {
  return <Outlet />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Pricing />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
