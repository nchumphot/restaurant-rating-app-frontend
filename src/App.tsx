import { useEffect, useState } from "react";
import { AllRestaurants } from "./components/AllRestaurants";
import { PageHeader } from "./components/PageHeader";
import "./css/App.css";
import { fetchData } from "./utils/fetchData";
import { IRestaurant } from "./utils/IRestaurant";

function App(): JSX.Element {
  const [allRestaurants, setAllRestaurants] = useState<Array<IRestaurant>>([]);
  useEffect(() => {
    fetchData("http://localhost:4000/restaurants", setAllRestaurants);
  }, []);
  return (
    <>
      <PageHeader />
      <AllRestaurants restaurants={allRestaurants} />
    </>
  );
}

export default App;
