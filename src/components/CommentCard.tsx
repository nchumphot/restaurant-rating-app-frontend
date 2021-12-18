import { IRestaurantReview } from "../interfaces/IRestaurantReview";

export function CommentCard(props: { review: IRestaurantReview }): JSX.Element {
  return (
    <>
      <p>{props.review.comment}</p>
      <p>{props.review.score}</p>
      <small>{`Comment submitted on ${props.review.submission_date}`}</small>
    </>
  );
}
