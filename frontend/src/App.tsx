import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Prices from "./pages/Prices/Prices";
import Contacts from "./pages/Contacts/Contacts";
import FreeHelp from "./pages/FreeHelp/FreeHelp";
import CriminalLaw from "./pages/CriminalLaw/CriminalLaw";
import CivilLaw from "./pages/CivilLaw/CivilLaw";
import FamilyLaw from "./pages/FamilyLaw/FamilyLaw";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/free-help" element={<FreeHelp />} />
            <Route path="/ugolovnyy-advokat-bryansk" element={<CriminalLaw />} />
            <Route path="/grazhdanskiy-advokat-bryansk" element={<CivilLaw />} />
            <Route path="/semeynyy-advokat-bryansk" element={<FamilyLaw />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
