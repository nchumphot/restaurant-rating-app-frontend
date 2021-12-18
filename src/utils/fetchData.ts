import { IRestaurant } from "./IRestaurant";

export function fetchData(
  url: string,
  setState: React.Dispatch<React.SetStateAction<IRestaurant[]>>
) {
  fetch(url)
    .then((response) => response.json())
    .then(
      (jsonBody: {
        status: string;
        message: string;
        response: IRestaurant[];
      }) => {
        console.log(jsonBody);
        setState(jsonBody.response);
      }
    );
}
