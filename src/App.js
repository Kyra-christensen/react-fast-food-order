import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
    
  return (
    <div className="App">
      <OrderImages 
        foodId={foodId}
        sideId={sideId}
        drinkId={drinkId} />
    </div>
  );
}

export default App;
