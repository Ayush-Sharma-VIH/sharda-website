import AboutUs from "../components/AboutUS/AboutUs.jsx";
import Contact from "../components/ContactPage/Contact";
import Welcome from "../components/Welcome/Welcome";
import Navbar from "../components/Navbar/Navbar.jsx";
import Resources from "../components/Resources/Resources.jsx";
function App() {
  return (
    <>
      <Navbar/>
      <Welcome />
      <AboutUs />
      <Resources />
      <Contact />
    </>
  );
}

export default App;
