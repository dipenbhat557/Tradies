import UserReviewData from "../constants/files/UserReview.json";
import { FaUserShield } from "react-icons/fa";

export default function CustomerReview() {
  return (
    <div className="p-2 m-2">
      <h2 className="font-bold text-4xl  text-center">Customer Reviews</h2>
      <div className="flex m-3 p-2 ">
        {UserReviewData.reviews.map((customer) => {
          return (
            <div className=" m-12 border" key={customer.id}>
              <div className="flex">
                <FaUserShield className=" p-3 w-32 h-32" />

                <h2 className=" font-bold text-xl p-8 pt-16">
                  {customer.name}
                </h2>
              </div>
              <p className="text-center p-4">{customer.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
