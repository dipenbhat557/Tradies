import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCategory from "../components/ServiceCategory";

const ServicePage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <ServiceCategory />
      <Footer />
    </div>
  );
};

export default ServicePage;
