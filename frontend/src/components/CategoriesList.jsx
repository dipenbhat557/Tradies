import CategoriesListData from "../constants/files/CategoriesList.json";
import CategoriesCard from "./CategoriesCard";

function CategoriesList({ name }) {
  console.log(CategoriesListData.categoriesList);
  return (
    <div className="bg-gray-50   rounded-lg">
      <h2 className="font-bold p-6 px-8 text-3xl">{name}</h2>
      <CategoriesCard />
    </div>
  );
}

export default CategoriesList;
