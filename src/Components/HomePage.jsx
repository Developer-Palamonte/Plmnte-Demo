import React from "react";
import { useNavigate } from "react-router-dom";
import Healthy_Seeds_in_jar from "./Healthy_Seeds_in_jar.jpg";
import ChiaImage from "../data/Organic_Chia_Seeds.jpg";
import FlaxSeeds from "../data/Golden_Flax_Seeds.jpg";
import HampSeeds from "../data/Raw_Hamp_Seeds.jpg";

export default function Homepage() {
  return (
    <div className="space-y-20 p-6 bg-[#F7F9F5]">
      <HeroSection />
      <WhyChooseSeeds />
      <FeaturedProducts />
      <AboutSection />
    </div>
  );
}

// Screenshot 1
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#F7F9F5] px-6 py-10 rounded-lg max-w-7xl mx-auto">
      <div className="max-w-lg">
        <h1 className="text-4xl font-semibold text-[#153127] mb-4 leading-tight">
          Premium Seeds for a Healthier You
        </h1>
        <p className="text-gray-600 mb-6">
          Discover our carefully curated selection of organic seeds. From chia to sunflower, each seed is packed with nutrients to fuel your wellness journey.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-[#204329] hover:bg-[#2c6b3f] transition-colors text-white px-6 py-3 rounded-full cursor-pointer"
          style={{ backgroundColor: "#245534" }} // slightly lighter green than #204329
        >
          Shop Now &rarr;
        </button>
      </div>
      <div className="mt-8 md:mt-0 max-w-md">
        <img
          src= { Healthy_Seeds_in_jar }
          alt="Healthy Seeds in Jar"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

// Screenshot 2
function WhyChooseSeeds() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-semibold text-[#153127] mb-10">Why Choose Our Seeds?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: (
              <svg className="w-8 h-8 text-[#153127]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ),
            title: "100% Organic",
            desc: "All our seeds are organically sourced and free from harmful chemicals and pesticides.",
          },
          {
            icon: (
              <svg className="w-8 h-8 text-[#153127]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
              </svg>
            ),
            title: "Nutrient Rich",
            desc: "Packed with essential vitamins, minerals, and omega fatty acids for optimal health.",
          },
          {
            icon: (
              <svg className="w-8 h-8 text-[#153127]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6s-2.5 1.12-2.5 2.5S10.62 11 12 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
              </svg>
            ),
            title: "Quality Assured",
            desc: "Every batch is tested for purity and quality to ensure you get the best products.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#EBF0ED] p-8 rounded-lg flex flex-col items-center text-center"
          >
            <div className="bg-[#DCE7E1] rounded-full p-4 mb-4">{icon}</div>
            <h3 className="font-semibold text-[#153127] mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Screenshot 3
function FeaturedProducts() {
  const navigate = useNavigate();

  const products = [
    {
      id: "chia-seeds",
      title: "Organic Chia Seeds",
      desc:
        "Premium chia seeds rich in omega-3 fatty acids, fiber, and antioxidants. Perfect for smoothies, yogurt, and more.",
      img: ChiaImage,
    },
    {
      id: "flax-seeds",
      title: "Golden Flax Seeds",
      desc:
        "Nutty-flavored golden flax seeds packed with omega-3s, lignans, and dietary fiber for optimal health.",
      img: FlaxSeeds,
    },
    {
      id: "hemp-hearts",
      title: "Raw Hemp Hearts",
      desc:
        "Shelled hemp seeds with a mild, nutty flavor. An excellent source of complete plant protein and health benefits.",
      img: HampSeeds,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-semibold text-[#153127] mb-2">
        Featured Products
      </h2>
      <p className="text-gray-600 mb-10">
        Explore our most popular seeds loved by health enthusiasts
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(({ id, title, desc, img }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden cursor-pointer
                       transform transition-transform duration-300
                       shadow-sm hover:shadow-xl hover:-translate-y-3"
          >
            <div className="overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-64 object-cover
                           transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="font-semibold text-[#153127] mb-2">
                {title}
              </h3>
              <p className="text-gray-600 mb-3 line-clamp-3">
                {desc}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#153127]">
                  TBD
                </span>
                <button
                  onClick={() => navigate(`/products/${id}`)}
                  className="text-orange-600 hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/products")}
        className="mt-12 bg-[#204329] hover:bg-[#2c6b3f]
                   transition-colors text-white px-6 py-3
                   rounded-full cursor-pointer"
        style={{ backgroundColor: "#245534" }}
      >
        View All Products →
      </button>
    </section>
  );
}


// Screenshot 4
function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10 bg-[#FFF9F0] rounded-lg">
      <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <img
          src= { FlaxSeeds }
          alt="About Seeds & Co"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 text-[#153127]">
        <h2 className="text-3xl font-semibold mb-6">About Seeds & Co</h2>
        <p className="mb-4 text-gray-700">
          At Seeds & Co, we believe in the power of nature to nourish and heal. Our mission is to bring you the finest selection of organic seeds, carefully sourced from trusted farms around the world.
        </p>
        <p className="mb-6 text-gray-700">
          Each seed in our collection is chosen for its exceptional nutritional profile and quality. Whether you’re looking to boost your energy, support heart health, or simply add more nutrients to your diet, our seeds are the perfect choice.
        </p>
        <h3 className="font-semibold mb-3">Our Promise</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>100% organic and non-GMO seeds</li>
          <li>Sustainably sourced from ethical suppliers</li>
          <li>Rigorous quality testing for every batch</li>
        </ul>
      </div>
    </section>
  );
}
