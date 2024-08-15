import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
        element: <h1>Book Generator API</h1>,
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
