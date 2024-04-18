// views
import { About, Contact, Home, Projects, Skills } from "./pageLayout";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Menu />
    </>
  );
}

export default App;
