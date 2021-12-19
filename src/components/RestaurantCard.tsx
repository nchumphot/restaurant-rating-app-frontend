import { IRestaurant } from "../interfaces/IRestaurant";
import "../css/RestaurantCard.css";

export function RestaurantCard(props: {
  restaurant: IRestaurant;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  return (
    <div className="restaurant-card">
      <div className="restaurant-name">
        <h3>{props.restaurant.name}</h3>
      </div>
      <div className="restaurant-address">
        <small>{`${props.restaurant.street}`}</small>
        <br />
        <small>{`${props.restaurant.city} ${props.restaurant.postcode}`}</small>
      </div>
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
