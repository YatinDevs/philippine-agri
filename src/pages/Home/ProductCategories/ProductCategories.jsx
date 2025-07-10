import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Sprout,
  Shield,
  FlaskConical,
  Leaf,
  Gem,
  Bug,
} from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Microbial Solution",
      icon: <Droplets className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "Beneficial microorganisms for soil and plant health",
      details:
        "Contains nitrogen-fixing bacteria, phosphate solubilizers, and other beneficial microbes that enhance soil fertility and plant immunity.",
    },
    {
      id: 2,
      name: "Plant Growth Regulators",
      icon: <Sprout className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Natural compounds to enhance plant development",
      details:
        "Organic plant hormones that regulate growth processes including cell division, elongation, flowering, and fruit development.",
    },
    {
      id: 3,
      name: "Plant Protectants",
      icon: <Shield className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Organic solutions to protect plants from diseases",
      details:
        "Formulations containing plant extracts and beneficial microbes that create protective barriers against pathogens.",
    },
    {
      id: 4,
      name: "Nutrient Solutions",
      icon: <FlaskConical className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Essential nutrients for optimal plant growth",
      details:
        "Balanced micronutrient and macronutrient formulations for foliar application or soil drenching.",
    },
    {
      id: 5,
      name: "Organic Fertilizers",
      icon: <Leaf className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "100% natural fertilizers for sustainable farming",
      details:
        "Plant and animal-based fertilizers that improve soil structure while providing slow-release nutrients.",
    },
    {
      id: 6,
      name: "Special Products",
      icon: <Gem className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Unique formulations for specific agricultural needs",
      details:
        "Custom solutions for particular crops, soil conditions, or environmental challenges.",
    },
    {
      id: 7,
      name: "Bio-Fungicides",
      icon: <Shield className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Natural solutions against fungal diseases",
      details:
        "Contains beneficial fungi and bacteria that outcompete or directly attack pathogenic fungi.",
    },
    {
      id: 8,
      name: "Bio-Pesticides",
      icon: <Bug className="h-8 w-8 text-[#48A93B]" />,
      image:
        "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Eco-friendly pest control solutions",
      details:
        "Plant extracts and microbial formulations that deter or eliminate pests while being safe for beneficial insects.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1A317F] mb-4"
          >
            Our Agricultural Product Range
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            These are biological products which are purely organic, effective,
            eco-friendly and cost-effective to the farmers. These can be used in
            plant growth enhancement as well as in soil health improvement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square perspective-1000"
            >
              <motion.div
                className="relative w-full h-full rounded-xl shadow-sm transition-all duration-300"
                whileHover={{ rotateY: 180 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of Card */}
                <div
                  className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative w-full h-full bg-white">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-center justify-end p-6">
                      <div className="bg-white p-3 rounded-full mb-3">
                        {category.icon}
                      </div>
                      <h3 className="text-white font-bold text-lg sm:text-xl text-center">
                        {category.name}
                      </h3>
                      <span className="text-white/80 text-sm mt-1">
                        {category.description}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-[#1A317F] p-6 flex flex-col justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="text-white text-center">
                    <div className="bg-white/20 p-3 rounded-full mb-4 inline-flex">
                      {category.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {category.details}
                    </p>
                    <div className="bg-white/10 p-2 rounded-lg">
                      <p className="text-xs text-white/80">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
