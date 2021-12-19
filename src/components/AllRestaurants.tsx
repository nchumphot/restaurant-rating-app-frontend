import { IRestaurant } from "../interfaces/IRestaurant";
import { RestaurantCard } from "./RestaurantCard";
import "../css/AllRestaurants.css";

export function AllRestaurants(props: {
  restaurants: IRestaurant[];
  setSelection: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  console.log(props.restaurants);
  return (
    <section>
      <h2>All restaurants</h2>
      <div className="restaurants-flex-box">
        {props.restaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            restaurant={item}
            setSelection={props.setSelection}
          />
        ))}
      </div>
    </section>
  );
}
