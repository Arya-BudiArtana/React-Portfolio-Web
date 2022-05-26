import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Exp from "./components/experience/Exp";
import Work from "./components/works/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testi from "./components/testimonials/Testi";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import './App.css'
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color  : darkMode ? "white" : "",
    }}
    >
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Exp></Exp>
      <Work></Work>
      <Portfolio></Portfolio>
      <Testi></Testi>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
