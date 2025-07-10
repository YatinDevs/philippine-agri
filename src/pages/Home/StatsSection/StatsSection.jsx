import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Users, Truck } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "15+",
      label: "Years of Excellence",
      icon: <Award className="w-8 h-8 text-[#48A93B]" />,
    },
    {
      id: 2,
      value: "956+",
      label: "Product Registrations",
      icon: <Leaf className="w-8 h-8 text-[#48A93B]" />,
    },
    {
      id: 3,
      value: "73+",
      label: "Manufacturing Facilities",
      icon: <Truck className="w-8 h-8 text-[#48A93B]" />,
    },
    {
      id: 4,
      value: "10K+",
      label: "Satisfied Clients",
      icon: <Users className="w-8 h-8 text-[#48A93B]" />,
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
            Growing Organically: A Commitment to Nature's Balance
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-[#1A317F] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
