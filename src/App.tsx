
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import AiConsultingUAE from "./pages/AiConsultingUAE";

// Solution Pages
import FinancialInstitutions from "./pages/solutions/FinancialInstitutions";
import HealthcareNetworks from "./pages/solutions/HealthcareNetworks";
import ManufacturingFirms from "./pages/solutions/ManufacturingFirms";
import RetailGroups from "./pages/solutions/RetailGroups";
import PrivateWealthOffices from "./pages/solutions/PrivateWealthOffices";
import AviationLogistics from "./pages/solutions/AviationLogistics";
import PublicSector from "./pages/solutions/PublicSector";
import RealEstate from "./pages/solutions/RealEstate";
import LawFirms from "./pages/solutions/LawFirms";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai-consulting-uae" element={<AiConsultingUAE />} />
              
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
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
