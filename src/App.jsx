import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Logement } from "./pages/Logement.jsx";
import { Error_404 } from "./pages/Error_404.jsx";
import { About } from "./pages/About.jsx";
import { Header } from "./layouts/Header.jsx";
import { Footer } from "./layouts/Footer.jsx";
import { LogementsProvider } from "./contexts/logementsContext.jsx";
import { Tarifs } from "./pages/Tarifs.jsx";
import { Modal } from "./layouts/Modal.jsx";
import { ModuleReservation } from "./components/ModuleReservation.jsx";
import { Composants } from "./pages/Composants.jsx";

export function App() {
  return (
    <LogementsProvider>
        <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/about" element={<About />} />
          <Route path="/composants" element={<Composants />} />
          <Route path="*" element={<Error_404 />} />
        </Routes>
      </div>
      <Footer />
      <Modal>
        <ModuleReservation />
      </Modal>
    </LogementsProvider>
  );
}