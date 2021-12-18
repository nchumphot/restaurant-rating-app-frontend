import { IRestaurant } from "../utils/IRestaurant";
import { RestaurantCard } from "./RestaurantCard";

export function AllRestaurants(props: {
  restaurants: IRestaurant[];
}): JSX.Element {
  console.log(props.restaurants);
  return (
    <section>
      <h2>All restaurants</h2>
      {props.restaurants.map((item) => (
        <RestaurantCard key={item.id} {...item} />
      ))}
    </section>
  );
}
