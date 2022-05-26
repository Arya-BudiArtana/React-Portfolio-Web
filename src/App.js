import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Exp from "./components/experience/Exp";
import Work from "./components/works/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testi from "./components/testimonials/Testi";
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Exp></Exp>
      <Work></Work>
      <Portfolio></Portfolio>
      <Testi></Testi>
    </div>
  );
}

export default App;
