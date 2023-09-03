"use client";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Experience,
  Contacts,
  Projects,
  Services,
} from "./components";
import { headerData } from "./data/headerData";

const Main: React.FC = () => {
  return (
    <div>
      <title>{headerData.name} - Porfolio</title>

      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Main;
