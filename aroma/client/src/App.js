import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routers from "./router/Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routers/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
