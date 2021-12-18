import { RestaurantCard } from "./RestaurantCard";


export function AllRestaurants(): JSX.Element {
    return (
        <section>
            <h2>All restaurants</h2>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </section>
    );
}