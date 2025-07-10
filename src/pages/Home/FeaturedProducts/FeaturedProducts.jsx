import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Leaf, Bug } from "lucide-react";

const FeaturedProducts = () => {
  const featured = [
    {
      id: 1,
      name: "Bio-Fungicides",
      description:
        "These are biological products which are made up of living organisms that are used to control the activity of plant pathogenic fungi. These are purely organic, effective, eco-friendly and cost-effective to the farmers.",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Shield className="h-8 w-8 text-[#48A93B]" />,
    },
    {
      id: 2,
      name: "Bio-Fertilizer",
      description:
        "These are biological products which are purely organic, effective, eco-friendly and cost-effective to the farmers. These can be used in plant growth enhancement as well as in soil health improvement.",
      image:
        "https://images.unsplash.com/photo-1605007493699-af65834f8a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Leaf className="h-8 w-8 text-[#48A93B]" />,
    },
    {
      id: 3,
      name: "Bio-Pesticides",
      description:
        "These are biological products which are made up of living organisms that are used to control insect pests having low or no toxicity to non-target organisms. These are purely organic, effective, eco-friendly and cost-effective to the farmers.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Bug className="h-8 w-8 text-[#48A93B]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1A317F] mb-4"
          >
            Our Featured Products
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#E8F5E9] p-2 rounded-full">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A317F]">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Link
                  to={`/category/${product.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-[#1A317F] font-medium hover:underline"
                >
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
