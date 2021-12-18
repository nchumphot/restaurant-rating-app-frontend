import { useEffect, useState } from "react";
import { AllRestaurants } from "./components/AllRestaurants";
import { PageHeader } from "./components/PageHeader";
import { SelectedRestaurant } from "./components/SelectedRestaurant";
import "./css/App.css";
import { fetchRestaurants } from "./utils/fetchRestaurants";
import { IRestaurant } from "./interfaces/IRestaurant";

function App(): JSX.Element {
  const [allRestaurants, setAllRestaurants] = useState<IRestaurant[]>([]);
  const [selection, setSelection] = useState<number>(0);
  useEffect(() => {
    fetchRestaurants("http://localhost:4000/restaurants", setAllRestaurants);
  }, []);
  return (
    <>
      <PageHeader />
      <AllRestaurants
        restaurants={allRestaurants}
        setSelection={setSelection}
      />
      <h1>============================================</h1>
      {selection !== 0 && <SelectedRestaurant id={selection} />}
    </>
  );
}

export default App;
