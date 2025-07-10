import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from "./pages/ErrorPages/NotFound";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";
import ProductPage from "./pages/Home/ProductPage/ProductPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutPage from "./pages/About/AboutPage";
// import BlogPage from "./pages/Home/Blogs/BlogPage";
// import BlogDetailsPage from "./pages/Home/Blogs/BlogDetailsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="blogs" element={<BlogPage />} /> */}
        <Route path="products" element={<ProductPage />} />
        {/* <Route path="/blog/:slug" element={<BlogDetailsPage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
