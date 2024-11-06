import AboutUs from "../components/AboutUS/AboutUs.jsx";
import Contact from "../components/ContactPage/Contact";
import Welcome from "../components/Welcome/Welcome";
import Navbar from "../components/Navbar/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar/>
      <Welcome />
      <Contact />
      <AboutUs />
    </>
  );
}

export default App;
