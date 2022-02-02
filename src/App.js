import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';
import OrderName from './OrderName';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('');
    
  return (
    <div className="App">
      <h3>Order for valued customer: {orderName}</h3>
        
      <OrderImages 
        foodId={foodId}
        sideId={sideId}
        drinkId={drinkId} />
    </div>
  );
}

export default App;
