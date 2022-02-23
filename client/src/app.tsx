import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./pages/landing";
//import Login from "./pages/login";
// import Mypage from "./pages/mypage";
// import Signup from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @font-face {
    font-family: 'Handletter';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SangSangShin';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangShin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .notosanskr * { 
     font-family: 'Noto Sans KR', sans-serif;
  }
`;

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
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header {...isLogin} {...handleLogout} />
        <Landing />
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
    </div>
  );
}

export default App;
