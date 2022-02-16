import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
//import Login from "./pages/login";
// import Mypage from "./pages/mypage";
// import Signup from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
export interface Iprops {
  isLogin: boolean;
  handleLogout: () => void;
}

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <BrowserRouter>
      <Header {...isLogin} {...handleLogout} />
      <Main />
      <Footer />
      <Routes>
        {/* <Route path="/login">
          <Login />
         </Route> */}
        {/* <Route path="/mypage">
          <Mypage />
         </Route> */}
        {/* <Route path="/signup">
          <Signup />
         </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
