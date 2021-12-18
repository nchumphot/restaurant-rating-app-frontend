import { IRestaurantReview } from "../interfaces/IRestaurantReview";

export function fetchOneRestaurant(
  url: string,
  setState: React.Dispatch<React.SetStateAction<IRestaurantReview[]>>
) {
  fetch(url)
    .then((response) => response.json())
    .then(
      (jsonBody: {
        status: string;
        message: string;
        response: IRestaurantReview[];
      }) => {
        console.log(jsonBody);
        setState(jsonBody.response);
      }
    );
}
