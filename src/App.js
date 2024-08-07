import { useRef, Suspense, lazy } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const ContactMe = lazy(() => import("./components/ContactMe"));
// import Home from "./components/Home";
// import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>...loading</p>}>
        <Home />
      </Suspense>
      <Skills />
      <Projects />
      <Suspense fallback={<p>...loading</p>}>
        <ContactMe />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
