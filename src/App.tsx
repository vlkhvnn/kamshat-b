import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppointmentPage from "./pages/Appointment";
import BlogPage from "./pages/Blog";
import MainPage from "./pages/Main";
import ProgramsPage from "./pages/Programs";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Main
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Main);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route path="/" element={<MainPage setSelectedPage={setSelectedPage} />} />
          <Route path="/programs" element={<ProgramsPage setSelectedPage={setSelectedPage}/>} />
          <Route path="/appointment" element={<AppointmentPage setSelectedPage={setSelectedPage}/>} />
          <Route path="/blog" element={<BlogPage setSelectedPage={setSelectedPage}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
