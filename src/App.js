import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="container-main">
      <div className="main">
        <Nav />
        <Hero />
      </div>   
      <div>
        <Footer/>        
      </div>  
    </div>    
  );
}

export default App;
