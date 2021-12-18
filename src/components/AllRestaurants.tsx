import { IRestaurant } from "../interfaces/IRestaurant";
import { RestaurantCard } from "./RestaurantCard";

export function AllRestaurants(props: {
  restaurants: IRestaurant[];
  setSelection: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  console.log(props.restaurants);
  return (
    <section>
      <h2>All restaurants</h2>
      {props.restaurants.map((item) => (
        <RestaurantCard
          key={item.id}
          restaurant={item}
          setSelection={props.setSelection}
        />
      ))}
    </section>
  );
}
