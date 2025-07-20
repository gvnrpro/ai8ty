
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
const About = lazy(() => import("./pages/About"));
const Labs = lazy(() => import("./pages/Labs"));
const Contact = lazy(() => import("./pages/Contact"));

// Create placeholder pages for new navigation items
const WhatWeBuild = lazy(() => import("./pages/WhatWeBuild"));
const Insights = lazy(() => import("./pages/Insights"));
const Careers = lazy(() => import("./pages/Careers"));
const Explore = lazy(() => import("./pages/Explore"));

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
                <Route path="/about" element={<About />} />
                <Route path="/what-we-build" element={<WhatWeBuild />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
