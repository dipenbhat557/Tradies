import React from "react";
import female from "../constants/images/female.jpg";
const Hero = () => {
  const cardData = [
    {
      id: 1,
      name: "Pest Control",
      rating: "4.5 11.2k",
      imageUrl:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      cost: "INR 885/-",
    },
    {
      id: 2,
      name: "Top Repairing",
      rating: "4.5 11.2k",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/03/19/15/04/faucet-3240211_640.jpg",
      cost: "INR 100/-",
    },
    {
      id: 3,
      name: "Kitchen Cleaning",
      rating: "5 111.2k",
      imageUrl:
        "https://img.freepik.com/free-photo/medium-shot-woman-cleaning_23-2148520961.jpg",
      cost: "INR 555/-",
    },
    {
      id: 4,
      name: "Sofa Cleaning",
      rating: "4.5 11.2k",
      imageUrl:
        "https://www.wakefit.co/guides/wp-content/uploads/2021/09/Banner-6.jpg",
      cost: "INR 445/-",
    },
  ];

  return (
    <div className="px-12 py-8">
      <section className="bg-white dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto  lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl  tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Home Services at your{" "}
              <span className="lg:ml-8 sm:ml-0"> doorstep</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Find the right solution based on your problem
            </p>

            <div className="pt-2 relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              ></button>
            </div>

            <button
              type="button"
              className="text-white bg-blue-800 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium mt-6 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Services
            </button>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex  h-max">
            <img src={female} alt="mockup" className="rounded-xl" />
          </div>
        </div>
      </section>

      <div className="shadow-xl shadow-slate-200 mt-0 px-10 w-full border border-t-0 border-r-0  border-l-2 border-b-2 border-b-gray-400 border-l-gray-400">
        <div>
          <h2
            className="text-xl text-black font-semibold
            "
          >
            Most booked services
          </h2>
        </div>

        <div className="flex justify-start">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
            >
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-lg h-36 w-36"
                  src={card.imageUrl}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  {card.name}
                </p>
                <p className="text-black  font-normal">{card.rating}</p>
                <p className="text-black  font-normal">{card.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
