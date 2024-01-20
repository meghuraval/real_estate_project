import "./App.css";
import Companies from "./components/Companies";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resedencies from "./components/Resedencies";

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
    </div>
  );
}

export default App;
