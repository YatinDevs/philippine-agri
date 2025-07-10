import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FlaskConical, Microscope, TestTube2, Leaf } from "lucide-react";

const ResearchSection = () => {
  const features = [
    {
      id: 1,
      title: "Advanced Laboratory",
      description: "State-of-the-art equipment for precise research",
      icon: <Microscope className="w-6 h-6 md:w-8 md:h-8 text-[#48A93B]" />,
    },
    {
      id: 2,
      title: "Quality Control",
      description: "Rigorous testing for product effectiveness",
      icon: <TestTube2 className="w-6 h-6 md:w-8 md:h-8 text-[#48A93B]" />,
    },
    {
      id: 3,
      title: "Innovation",
      description: "Developing cutting-edge agricultural solutions",
      icon: <FlaskConical className="w-6 h-6 md:w-8 md:h-8 text-[#48A93B]" />,
    },
    {
      id: 4,
      title: "Sustainability",
      description: "Eco-friendly formulations for the future",
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-[#48A93B]" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#1A317F] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Research & Development
            </h2>
            <p className="mb-6 md:mb-8 text-gray-200 text-sm md:text-base">
              We have a state-of-the-art infrastructure for doing all
              activities. For this we have separate air handling unit supported
              R & D laboratory, preparation laboratories, production & packaging
              units.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1 md:p-2 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm md:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/research"
              className="inline-flex items-center gap-2 bg-[#48A93B] hover:bg-[#3A8A2F] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-colors"
            >
              Explore Our Research
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
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
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Research and Development"
              className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#48A93B] text-white p-3 md:p-6 rounded-xl shadow-lg w-2/3 md:w-3/4">
              <div className="flex items-center gap-2 md:gap-4">
                <FlaskConical className="w-6 h-6 md:w-10 md:h-10" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold">44+</h3>
                  <p className="text-xs md:text-sm">R&D Facilities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
