import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-[#F8F9FA] min-h-screen">
      {/* Top Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#FD661D] text-left">About Us</h1>
        <h2 className="text-3xl font-bold text-[#FD661D] text-left mt-2 mb-4">
          Discover Deox Foods
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 space-y-4 md:space-y-0">
          <p className="text-gray-700 text-left max-w-3xl md:w-2/3">
            Welcome to the ultimate food delivery experience tailored just for
            you! At Deox Foods, we believe that good food should be accessible,
            convenient, and personalized. Whether you’re a student juggling
            deadlines or someone seeking a delicious meal on the go, we bring
            your favorite dishes to your doorstep in no time. Explore a world
            of flavors, curated for your taste and lifestyle.
          </p>
          <img
            src="/assets/pic2.jpg" // Ensure this path is correct for your project structure
            alt="Deox Foods Delivery Experience"
            className="w-full sm:w-64 h-40 object-cover rounded-lg shadow-md md:ml-6"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#FD661D] text-right mb-4">
          Why Choose Us?
        </h2>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center mt-4 space-y-4 md:space-y-0">
          <p className="text-gray-700 text-justify max-w-3xl md:w-2/3">
            We’re not just another food delivery platform—we’re your partner in
            wellness and convenience. Powered by AI, Deox Foods recommends
            meals that suit your diet, lifestyle, and health goals. With
            real-time nutritional insights, calorie tracking, and fast delivery,
            we ensure every bite is worth savoring. Join the Deox Foods family
            and let us redefine how you experience food.
          </p>
          <img
            src="../assets/pic1.jpg" // Ensure this path is correct
            alt="Deox Foods Highlights"
            className="w-full sm:w-64 h-40 object-cover rounded-lg shadow-md md:mr-6"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#2C3E50] text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-center mb-8">
          The amazing team behind Deox Foods
        </p>
      </div>

      {/* Team Images Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
        <div className="w-full sm:w-64">
          <img
            src="/assets/about1.jpg" // Ensure the path is correct
            alt="Deon Orina"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-[#2C3E50]">Deon Orina</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
        </div>
        <div className="w-full sm:w-64">
          <img
            src="/assets/about2.jpg" // Ensure the path is correct
            alt="Happy Customers"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-[#2C3E50]">Our Team</h3>
            <p className="text-gray-600">Committed to Excellence</p>
          </div>
        </div>
        <div className="w-full sm:w-64">
          <img
            src="/assets/about3.jpg" // Ensure the path is correct
            alt="Deox Foods Delivery"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-[#2C3E50]">Delivery Experts</h3>
            <p className="text-gray-600">Fast & Reliable</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500 text-center">
        © 2024 Deox Foods. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
