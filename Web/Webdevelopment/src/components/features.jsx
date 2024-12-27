import React from "react";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";

const Features = () => {
  const features = [
    {
      title: "Automated Workflow Generation",
      description:
        "Eliminate manual configurations with our intelligent automation that generates workflows tailored to your project needs. This feature accelerates your development cycle and minimizes human error.",
      image: image1,
    },
    {
      title: "Framework Agnostic",
      description:
        "Whether you’re using React, Node.js, or any other framework, our tool supports all major technologies to ensure flexibility. Enjoy seamless integration across diverse environments without limitations.",
      image: image2,
    },
    {
      title: "Predefined Templates",
      description:
        "Access a library of predefined templates that adhere to industry best practices, saving you time and effort. These templates allow for quick setup and ensure consistency in your projects.",
      image: image3,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Designed with developers in mind, our intuitive interface simplifies the CI/CD setup process, making it accessible for everyone. Experience a streamlined workflow that enhances productivity and collaboration.",
      image: image1,
    },
  ];

  return (
    <div
      id="features"
      className="bg-gradient-to-b from-black via-darkBlue to-black text-white py-10"
    >
      <h2 className="text-5xl font-bold text-center mb-4">Key Features</h2>
      <p className="text-lg text-center mb-10">
        Discover the powerful features that make our CI/CD tool the best choice
        for developers.
      </p>
      <div className="container mx-auto px-4 flex flex-col space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-16 bg-gray-800"
          >
            <h3 className="text-4xl font-semibold text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-center mb-5 text-xl">
              {feature.description}
            </p>
            <img
              src={feature.image}
              alt={feature.title}
              className="mx-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
