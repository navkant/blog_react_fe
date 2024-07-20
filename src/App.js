import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Error from "./components/error";
// import Header from "./components/Header";
import Header from "./components/Header_2";
import Body from "./components/Body";
import BlogContent from "./components/BlogContent";
import About from "./components/About";
import Login from "./components/Login";
import UserBlogs from "./components/UserBlogs";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/blogs/:blogId",
        element: <BlogContent />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user-blogs",
        element: <UserBlogs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
