import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Hero from "../components/Hero.jsx";

import CategoriesList from "../components/CategoriesList.jsx";
import CustomerReview from "../components/CustomerReview.jsx";
import SingleServiceContainer from "../components/SingleServiceContainer.jsx";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />

      <Hero />

      <CategoriesList name={"Home Repair Services"} />
      <CategoriesList name={"Cleaning & Pest Control"} />
      <SingleServiceContainer />
      <CategoriesList name={"AC & Appliances"} />
      <CustomerReview />

      <Footer />
    </div>
  );
}
