import { useRef } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

import Categories from "../constants/files/Categories.json";

function CategoriesCard() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollTo({
      left: container.scrollLeft - 100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollTo({
      left: container.scrollLeft + 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className=" flex  p-4 gap-4 no-scrollbar overflow-x-auto "
      >
        {Categories.categories.map((category) => {
          return (
            <div
              key={category.id}
              className="bg-slate-200 flex-shrink-0 w-72 no-scrollbar  rounded-xl "
            >
              <img src={category.imagePath} className="p-4 rounded-lg " />
              <h2 className="font-bold text-xl p-4  px-20  ">
                {category.name}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="mb-12  top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          className="absolute  right-24  px-4 py-2  rounded-md"
        >
          <FaCircleArrowLeft />
        </button>
        <button
          onClick={scrollRight}
          className="absolute  right-4 px-4 py-2   rounded-md"
        >
          <FaCircleArrowRight />
        </button>
      </div>
    </div>
  );
}

export default CategoriesCard;
