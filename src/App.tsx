import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Lazy load main pages
const Index = lazy(() => import("./pages/Index"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Contact = lazy(() => import("./pages/Contact"));

// Solution Pages
const FinancialInstitutions = lazy(() => import("./pages/solutions/FinancialInstitutions"));
const HealthcareNetworks = lazy(() => import("./pages/solutions/HealthcareNetworks"));
const ManufacturingFirms = lazy(() => import("./pages/solutions/ManufacturingFirms"));
const RetailGroups = lazy(() => import("./pages/solutions/RetailGroups"));
const PrivateWealthOffices = lazy(() => import("./pages/solutions/PrivateWealthOffices"));
const AviationLogistics = lazy(() => import("./pages/solutions/AviationLogistics"));
const PublicSector = lazy(() => import("./pages/solutions/PublicSector"));
const RealEstate = lazy(() => import("./pages/solutions/RealEstate"));
const LawFirms = lazy(() => import("./pages/solutions/LawFirms"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Solution Pages */}
                <Route path="/solutions/financial-institutions" element={<FinancialInstitutions />} />
                <Route path="/solutions/healthcare-networks" element={<HealthcareNetworks />} />
                <Route path="/solutions/manufacturing-firms" element={<ManufacturingFirms />} />
                <Route path="/solutions/retail-groups" element={<RetailGroups />} />
                <Route path="/solutions/private-wealth-offices" element={<PrivateWealthOffices />} />
                <Route path="/solutions/aviation-logistics" element={<AviationLogistics />} />
                <Route path="/solutions/public-sector" element={<PublicSector />} />
                <Route path="/solutions/real-estate" element={<RealEstate />} />
                <Route path="/solutions/law-firms" element={<LawFirms />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
