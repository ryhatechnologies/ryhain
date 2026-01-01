import React from "react";
import "@/App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import {
  AboutPage,
  ContactPage,
  HomePage,
  LegalDisclosurePage,
  MissionPage,
  PrivacyPage,
  ProductsPage,
  TermsPage,
} from "@/pages/RyhaPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/legal" element={<LegalDisclosurePage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
