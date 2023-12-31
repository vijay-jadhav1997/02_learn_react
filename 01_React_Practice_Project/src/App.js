import React from "react";
import ReactDOM from "react-dom/client";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"

import Header from "./components/Header"
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

//* IMP Article link about Hooks:
//* https://www.freecodecamp.org/news/the-beginners-guide-to-react-hooks/

const AppLayout = () => {
  return (
    <div className="foodApp">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <Error />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);