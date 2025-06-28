
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import UslugiServices from "./pages/UslugiServices";
import About from "./pages/About";
import Project from "./pages/Project";
import Ideas from "./pages/Ideas";
import Brands from "./pages/Brands";
import Brand from "./pages/Brand";
import NewsAndBlog from "./pages/NewsAndBlog";
import NewsArticle from "./pages/NewsArticle";
import Account from "./pages/Account";
import Register from "./pages/Register";
import PasswordReset from "./pages/PasswordReset";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/uslugi" element={<UslugiServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandSlug" element={<Brand />} />
          <Route path="/news" element={<NewsAndBlog />} />
          <Route path="/news/:articleSlug" element={<NewsArticle />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
