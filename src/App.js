import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// Componentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">
        <section></section>

        <Sidebar />
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
