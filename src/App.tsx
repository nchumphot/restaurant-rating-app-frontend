import { useState } from 'react';
import { AllRestaurants } from './components/AllRestaurants';
import { PageHeader } from './components/PageHeader';
import './css/App.css';
import { IRestaurant } from './utils/IRestaurant';

function App(): JSX.Element {
  const [allRestaurants, setAllRestaurants] = useState<Array<IRestaurant>>([]);
  return (
    <>
      <PageHeader />
      <AllRestaurants />
    </>
  )
}

export default App;
