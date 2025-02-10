import React from "react";
import NavBar from "./components/navbar/navbar";
import HeroPage from "./pages/heropage/heropage";
import SecondPage from "./pages/secondpage/secondpage";
import Page4 from "./pages/page4/page4";
import Page5 from "./pages/page5/page5";
import Page6 from "./pages/page6/page6";
import Page7 from "./pages/page7/page7";
import Care from "./pages/customer/care";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroPage />
      <SecondPage />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Care />
      <Footer />
    </>
  );
};

export default App;
