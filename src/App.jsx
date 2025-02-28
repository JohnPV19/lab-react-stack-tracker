import { useState } from "react";
import "./App.css";
import companiesJSON from "./companies.json"
import technologiesJSON from "./technologies.json"
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [companies, setCompanies] = useState(companiesJSON)
  const [technologies, setTechnologies] = useState(technologiesJSON)
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companies={companies}/>} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies}/>} />
      </Routes>
    </div>
  );
}

export default App;