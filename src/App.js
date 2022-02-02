import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';
import OrderName from './OrderName';
import OrderList from './OrderList';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';
import DrinkDropdown from './DrinkDropdown';
import InstructionForm from './InstructionForm';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('');
  const [instructionsArray, setInstructionsArray] = useState([]);
    
  return (
    <div className="App">

      <h3>Order for valued customer: {orderName}</h3>
        
      <OrderImages 
        foodId={foodId}
        sideId={sideId}
        drinkId={drinkId} />

      <OrderList instructionsArray={instructionsArray} />

      <div className='order-form'>
        <FoodDropdown setFoodId={setFoodId} />
        <SideDropdown setSideId={setSideId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <OrderName setOrderName={setOrderName} />
        <InstructionForm instructionsArray={instructionsArray} setInstructionsArray={setInstructionsArray} />
      </div>
    </div>
  );
}

export default App;
