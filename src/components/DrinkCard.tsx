import { Drink } from "../types";

type DrinkProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkProps) {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-hidden">
        <img src={drink.strDrinkThumb} alt={`imagen de ${drink.strDrink}`} className="hover:scale-110 transition-transform hover:rotate-2"/>
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">Ver receta</button>
      </div>
    </div>
  );
}
