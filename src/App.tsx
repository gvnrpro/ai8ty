
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React from 'react';
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import FinancialInstitutions from "./pages/solutions/FinancialInstitutions";
import HealthcareNetworks from "./pages/solutions/HealthcareNetworks";
import ManufacturingGroups from "./pages/solutions/ManufacturingGroups";
import RetailConglomerates from "./pages/solutions/RetailConglomerates";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <HelmetProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/solutions/financial-institutions" element={<FinancialInstitutions />} />
                  <Route path="/solutions/healthcare-networks" element={<HealthcareNetworks />} />
                  <Route path="/solutions/manufacturing-groups" element={<ManufacturingGroups />} />
                  <Route path="/solutions/retail-conglomerates" element={<RetailConglomerates />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </HelmetProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
