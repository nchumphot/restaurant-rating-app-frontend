import { useEffect, useState } from "react";
import { IRestaurant } from "../interfaces/IRestaurant";
import { IRestaurantReview } from "../interfaces/IRestaurantReview";
import { fetchComments } from "../utils/fetchComments";
import { CommentCard } from "./CommentCard";

export function SelectedRestaurant(props: { id: number }): JSX.Element {
  const [reviews, setReviews] = useState<IRestaurantReview[]>([]);
  const [restaurant, setRestaurant] = useState<IRestaurant>({
    id: 0,
    name: "testing",
    street: "string",
    city: "string",
    postcode: "string",
  });
  useEffect(() => {
    const url = `http://localhost:4000/restaurants/${props.id}`;
    console.log(url);
    fetchComments(url, setRestaurant, setReviews);
  }, [props.id]);
  console.log(props.id);
  console.log(restaurant);
  console.log(reviews);
  return (
    <>
      {reviews.length > 0 && (
        <>
          <h2>Your selection</h2>
          <h3>{restaurant.name}</h3>
          <small>{`${restaurant.street}, ${restaurant.city} ${restaurant.postcode}`}</small>
          <p>
            {reviews.map((review) => (
              <CommentCard key={review.id} review={review} />
            ))}
          </p>
        </>
      )}
    </>
  );
}
