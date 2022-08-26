import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFound from "./pages/notfound";
import { GlobalStyle } from "./style/globalStyle";
import ForgotPassword from "./pages/forgotpassword";
import Navbar from "./components/navbar";
import Profile from "./pages/profile";
import WithAuth from "./components/withAuth/WithAuth";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/profile"
          element={
            <WithAuth>
              <Profile />
            </WithAuth>
          }
        />
      </Routes>
      <GlobalStyle />
    </div>
  );
};

export default App;
