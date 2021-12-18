import { IReview } from "./IReview";

export interface IRestaurantReview extends IReview {
  id: number;
  name: string;
  restaurant_id: number;
  submission_date: string;
  last_edited_date: string;
}
