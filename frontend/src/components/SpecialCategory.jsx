import React from "react";
import { Link } from "react-router-dom";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PaidIcon from "@mui/icons-material/Paid";

const SpecialCategory = () => {
  const categories = [
    {
      name: "Bed",
      type: "Bed fitting",
      money: "Rs 300",
      time: "30 Mins",
      details:
        "Add this to your project and make your life comfortable with our tradies who are available for 24/7",
      imageUrl:
        "https://wakefitdev.gumlet.io/img/engineered-wood-bed/leo/0.jpg",
    },
    {
      name: "Bed",
      type: "Bed fitting",
      money: "Rs 300",
      time: "30 Mins",
      details:
        "Add this to your project and make your life comfortable with our tradies who are available for 24/7",
      imageUrl:
        "https://wakefitdev.gumlet.io/img/engineered-wood-bed/leo/0.jpg",
    },
    {
      name: "Bed",
      type: "Bed fitting",
      money: "Rs 300",
      time: "30 Mins",
      details:
        "Add this to your project and make your life comfortable with our tradies who are available for 24/7",
      imageUrl:
        "https://wakefitdev.gumlet.io/img/engineered-wood-bed/leo/0.jpg",
    },
    {
      name: "Bed",
      type: "Bed fitting",
      money: "Rs 300",
      time: "30 Mins",
      details:
        "Add this to your project and make your life comfortable with our tradies who are available for 24/7",
      imageUrl:
        "https://wakefitdev.gumlet.io/img/engineered-wood-bed/leo/0.jpg",
    },
    {
      name: "Bed",
      type: "Bed fitting",
      money: "Rs 300",
      time: "30 Mins",
      details:
        "Add this to your project and make your life comfortable with our tradies who are available for 24/7",
      imageUrl:
        "https://wakefitdev.gumlet.io/img/engineered-wood-bed/leo/0.jpg",
    },
  ];
  return (
    <div className="p-12 cursor-pointer hover:shadow-black ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center hover:shadow-black ">
        {categories.map((category) => (
          <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img class="object-cover w-full h-64" src={category.imageUrl} />

            <div class="p-6">
              <div>
                <span class=" font-medium text-2xl uppercase dark:text-blue-400">
                  {category.name}
                </span>
                <p className="text-xl">{category.type}</p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {category.details}
                </p>
              </div>

              <div class="mt-4">
                <div class="flex  ">
                  <div class=" flex flex-col justify-between ">
                    <span class="mx-1 text-xl text-black dark:text-gray-300 ">
                      <WatchLaterIcon />
                      {category.time}
                    </span>
                    <span class="mx-1 text-xl text-black dark:text-gray-300 ">
                      <PaidIcon />
                      {category.money}
                    </span>
                  </div>
                </div>
              </div>
              <div className="ml-20 mt-2">
                <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Add to service cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialCategory;
