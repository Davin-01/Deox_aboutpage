import React from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";

const About = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="max-w-screen-lg mx-auto px-4 py-6 min-h-screen">
        {/* Top Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#FD661D] text-center">About Us</h1>
          <h2 className="text-3xl font-bold text-[#FD661D] text-left mt-4 mb-6">
            Discover Deox Foods
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <p className="text-gray-700 text-left max-w-3xl md:w-2/3">
              Welcome to the ultimate food delivery experience tailored just for
              you! At Deox Foods, we believe that good food should be accessible,
              convenient, and personalized. Whether you’re a student juggling
              deadlines or someone seeking a delicious meal on the go, we bring
              your favorite dishes to your doorstep in no time. Explore a world
              of flavors, curated for your taste and lifestyle.
            </p>
            <img
              src={pic2}
              alt="Deox Foods Delivery Experience"
              className="w-full sm:w-64 h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#FD661D] text-right mb-6">
            Why Choose Us?
          </h2>
          <div className="flex flex-col-reverse md:flex-row-reverse items-center space-y-6 md:space-y-0">
            <p className="text-gray-700 text-justify max-w-3xl md:w-2/3">
              We’re not just another food delivery platform—we’re your partner in
              wellness and convenience. Powered by AI, Deox Foods recommends
              meals that suit your diet, lifestyle, and health goals. With
              real-time nutritional insights, calorie tracking, and fast delivery,
              we ensure every bite is worth savoring. Join the Deox Foods family
              and let us redefine how you experience food.
            </p>
            <img
              src={pic1}
              alt="Deox Foods Highlights"
              className="w-full sm:w-64 h-48 object-cover rounded-lg shadow-lg mr-5"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#2C3E50] text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center mb-6">
            The amazing team behind Deox Foods
          </p>
        </div>

        {/* Team Images Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <div className="w-full sm:w-64">
            <img
              src="/assets/about1.jpg"
              alt="Deon Orina"
              className="w-full h-56 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-[#2C3E50]">Deon Orina</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </div>
          <div className="w-full sm:w-64">
            <img
              src="/assets/about2.jpg"
              alt="Happy Customers"
              className="w-full h-56 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-[#2C3E50]">Frontend Team</h3>
              <p className="text-gray-600">Building the Future</p>
            </div>
          </div>
          <div className="w-full sm:w-64">
            <img
              src="/assets/about3.jpg"
              alt="Deox Foods Delivery"
              className="w-full h-56 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-[#2C3E50]">Backend Team</h3>
              <p className="text-gray-600">Building the Future</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-sm text-gray-500 text-center">
        © 2024 Deox Foods. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
