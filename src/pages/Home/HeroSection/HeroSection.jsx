import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroContent = [
    {
      id: 1,
      image_url:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Trusted by Farmers Nationwide",
      description: "Join thousands of satisfied agricultural professionals",
      ctaHighlight: "Special Offers",
      buttonText: "Explore Deals",
      category: "Organic Fertilizers",
    },
    {
      id: 2,
      image_url:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Premium Organic Agricultural Solutions",
      description: "Enhance your crop yield with our eco-friendly products",
      ctaHighlight: "New Arrivals",
      buttonText: "Shop Now",
      category: "Bio-Fertilizers",
    },
    {
      id: 3,
      image_url:
        "https://plus.unsplash.com/premium_photo-1663089572474-6e2dc35d0ede?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sustainable Farming Solutions",
      description: "Natural products for healthier crops and soil",
      ctaHighlight: "Best Sellers",
      buttonText: "View Products",
      category: "Bio-Pesticides",
    },

    {
      id: 4,
      image_url:
        "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Advanced Crop Protection",
      description: "Effective solutions against pests and diseases",
      ctaHighlight: "Featured Products",
      buttonText: "Learn More",
      category: "Plant Protectants",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || heroContent.length === 0) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  const selectImage = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const currentItem = heroContent[currentIndex] || {};

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative w-full h-[80vh] flex items-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={currentItem.image_url}
              alt={currentItem.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl">
            {currentItem.ctaHighlight && (
              <motion.div
                className="inline-block bg-[#48A93B] text-white px-4 py-2 rounded-full mb-4 text-sm font-medium"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentItem.ctaHighlight}
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentItem.title}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentItem.description}
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="flex items-center gap-2 bg-[#1A317F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#142566] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <ShoppingCart size={18} />
                {currentItem.buttonText}
              </motion.button>

              <Link to="/about">
                <motion.button
                  className="flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Info size={18} />
                  Learn More
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {heroContent.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full z-10 backdrop-blur-sm transition-all"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full z-10 backdrop-blur-sm transition-all"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <div className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="flex overflow-x-auto gap-4 pb-2">
            {heroContent.map((item, index) => (
              <div
                key={item.id}
                onClick={() => selectImage(index)}
                className={`flex-shrink-0 relative cursor-pointer rounded-lg overflow-hidden transition-all ${
                  currentIndex === index
                    ? "ring-2 ring-[#1A317F]"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={item.image_url}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-20 w-32 object-cover"
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="text-white w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
