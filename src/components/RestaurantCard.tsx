import { IRestaurant } from "../utils/IRestaurant";

export function RestaurantCard(props: IRestaurant): JSX.Element {
  return (
    <>
      <h3>{props.name}</h3>
      <small>{`${props.street}, ${props.city} ${props.postcode}`}</small>
      <br />
      <br />
      <button>See more</button>
    </>
  );
}
