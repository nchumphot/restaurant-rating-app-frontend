import { useEffect, useState } from "react";
import { IRestaurantReview } from "../interfaces/IRestaurantReview";
import { fetchOneRestaurant } from "../utils/fetchOneRestaurant";
import { CommentCard } from "./CommentCard";

export function SelectedRestaurant(props: { id: number }): JSX.Element {
  const [reviews, setReviews] = useState<IRestaurantReview[]>([]);
  useEffect(() => {
    const url = `http://localhost:4000/restaurants/${props.id}`;
    console.log(url);
    fetchOneRestaurant(url, setReviews);
  }, [props.id]);
  console.log(props.id);
  console.log(reviews);
  return (
    <section>
      <h2>Selected restaurant</h2>
      {reviews.map((item) => {
        <CommentCard review={item} />;
      })}
    </section>
  );
}
