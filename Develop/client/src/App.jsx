import { Outlet } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
// import { Nav } from "./components/Nav/nav.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
