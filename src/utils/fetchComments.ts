import { setCommentRange } from "typescript";
import { IRestaurant } from "../interfaces/IRestaurant";
import { IRestaurantReview } from "../interfaces/IRestaurantReview";

export function fetchComments(
  url: string,
  setRestaurant: React.Dispatch<React.SetStateAction<IRestaurant>>,
  setReview: React.Dispatch<React.SetStateAction<IRestaurantReview[]>>
) {
  fetch(url)
    .then((response) => response.json())
    .then(
      (jsonBody: {
        status: string;
        message: string;
        response: { info: IRestaurant; comments: IRestaurantReview[] };
      }) => {
        console.log(jsonBody);
        setRestaurant(jsonBody.response.info);
        setReview(jsonBody.response.comments);
      }
    );
}
