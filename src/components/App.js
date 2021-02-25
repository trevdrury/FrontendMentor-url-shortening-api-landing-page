import React from "react";
import "./App.scss";
import Header from "./header/header.component";
import HeroSection from "./hero-section/hero-section.component";
import LinkShortener from "./link-shortener/link-shortener.component";
import ActionBox from "./action-box/action-box.component";
import Footer from "./footer/footer.component";
import AboutSection from "./about-section/about-section.component";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HeroSection />
        <LinkShortener />
        <AboutSection />
        <ActionBox />
        <Footer />
      </div>
    );
  }
}

export default App;
