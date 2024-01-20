import "./App.css";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resedencies from "./components/Resedencies";
import Value from "./components/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Resedencies />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
