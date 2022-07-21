import "./App.css";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="bg-[url('../src/assets/images/background.png')]">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
