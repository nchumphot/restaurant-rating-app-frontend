import { IRestaurant } from "../interfaces/IRestaurant";
import "../css/RestaurantCard.css";

export function RestaurantCard(props: {
  restaurant: IRestaurant;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  return (
    <div className="restaurant-card">
      <h3>{props.restaurant.name}</h3>
      <small>{`${props.restaurant.street}, ${props.restaurant.city} ${props.restaurant.postcode}`}</small>
      <br />
      <br />
      <button
        onClick={() => {
          props.setSelection(props.restaurant.id);
          console.log("Now selecting restaurant with ID", props.restaurant.id);
        }}
      >
        See more
      </button>
    </div>
  );
}
