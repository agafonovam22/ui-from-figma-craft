
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import UslugiServices from "./pages/UslugiServices";
import UslugiCategories from "./pages/UslugiCategories";
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
import Support from "./pages/Support";
import WhereToBuy from "./pages/WhereToBuy";
import Contacts from "./pages/Contacts";
import HomeFitnessEquipment from "./pages/HomeFitnessEquipment";
import GymEquipment from "./pages/GymEquipment";
import Catalog from "./pages/Catalog";
import ProductCard from "./pages/ProductCard";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Comparison from "./pages/Comparison";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import ProductCardConfigurator from "./pages/ProductCardConfigurator";

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
          <Route path="/uslugi" element={<UslugiCategories />} />
          <Route path="/uslugi/:category" element={<UslugiServices />} />
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
          <Route path="/support" element={<Support />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/home-fitness-equipment" element={<HomeFitnessEquipment />} />
          <Route path="/gym-equipment" element={<GymEquipment />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:productId" element={<ProductCard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product-card-configurator" element={<ProductCardConfigurator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
