import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { StyleGlobal } from "./config/StyleGlobal";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
function App() {
  const [theme, setTheme] = useState(true);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ThemeProvider value={{theme, setTheme}}>
      <div id="App" className={theme ? 'light' : 'dark'}>
        <StyleGlobal></StyleGlobal>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
