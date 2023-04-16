import { useEffect } from "react";
import Header from "./components/Header";
import { StyleGlobal } from "./config/StyleGlobal";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <StyleGlobal></StyleGlobal>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
