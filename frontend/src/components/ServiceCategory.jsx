import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
const ServiceCategory = () => {
  const serviceData = [
    {
      id: 1,
      name: "Balcony",
      imgUrl:
        "https://imgmedia.lbb.in/media/2023/06/6482dd3d01def74d4e5e83f8_1686297917749.jpg",
    },
    {
      id: 2,
      name: "Bed",
      imgUrl:
        "https://m.media-amazon.com/images/I/819tCi3bJ3L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    },
    {
      id: 3,
      name: "Mirror",
      imgUrl: "https://m.media-amazon.com/images/I/71zbt32XAJL.jpg",
    },
    {
      id: 4,
      name: "CupBoards",
      imgUrl:
        "https://images.pexels.com/photos/2208891/pexels-photo-2208891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 5,
      name: "Chair",
      imgUrl:
        "https://www.chumbak.com/cdn/shop/products/8907605114021_1.jpg?v=1673946891&width=2048",
    },
    {
      id: 6,
      name: "Doors",
      imgUrl:
        "https://static1.squarespace.com/static/59b2fba16f4ca36cb5ecf12a/t/60a5572ae5432c108c10f877/1621448490960/Lecate-Artisan-Doors-Custom-Door-Design-Home-Renovation-Remodel-Interior-Design-Leslie-Schofield-Catherine-Goodsell-5.jpg?format=1500w",
    },
  ];
  return (
    <div className="px-12 py-2">
      <div className="flex justify-between py-8 ">
        <div className="text-center mx-auto my-auto">
          <ul>
            <li>
              <h1 className="text-6xl font-semibold">Carpenter</h1>
            </li>
            <li className="text-center flex justify-center p-4 ">
              <StarIcon />
              <h1 className="text-2xl">4.5 11k</h1>
            </li>

            <li>
              <h1 className="text-center text-2xl">INR 11.2K</h1>
            </li>
          </ul>
        </div>

        <div>
          <img
            className="h-96 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
        </div>
      </div>
      <div className="w-max border-l-2 border-t-2 p-6 py-8 mb-7  border-l-gray-300 border-b-gray-300">
        <div>
          <h1 className="text-black text-xl font-semibold">Select a service</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {serviceData.map((service) => (
            <Link to="#">
              <div
                className="card w-96 h-60 bg-base-100 shadow-xl hover:shadow-gray-300"
                key={service.id}
              >
                <figure>
                  <img src={service.imgUrl} alt="Shoes" className="h-30" />
                </figure>
                <div className="card-body mx-auto">
                  <h2 className="card-title">{service.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
