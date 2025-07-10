import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Leaf, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1594057372766-885a42ddbb6e?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Philippine Agri Solution"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#1A317F] text-white p-6 rounded-xl shadow-lg w-3/4">
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10" />
                <div>
                  <h3 className="text-xl font-bold">Innovative</h3>
                  <p className="text-sm">Agricultural Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1A317F] mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              Philippine Agri Solution is dedicated to providing innovative and
              sustainable agricultural products that enhance productivity while
              protecting the environment. We specialize in bio-inputs and
              organic solutions for modern farming needs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-[#48A93B] mt-1" />
                <div>
                  <h4 className="font-bold text-[#1A317F]">Organic Products</h4>
                  <p className="text-sm text-gray-600">
                    Eco-friendly solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#48A93B] mt-1" />
                <div>
                  <h4 className="font-bold text-[#1A317F]">Expert Team</h4>
                  <p className="text-sm text-gray-600">
                    Agricultural specialists
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-[#48A93B] mt-1" />
                <div>
                  <h4 className="font-bold text-[#1A317F]">Innovative</h4>
                  <p className="text-sm text-gray-600">Modern solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#48A93B] mt-1" />
                <div>
                  <h4 className="font-bold text-[#1A317F]">Quality</h4>
                  <p className="text-sm text-gray-600">Certified products</p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#1A317F] hover:bg-[#142566] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Know Our Story
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
