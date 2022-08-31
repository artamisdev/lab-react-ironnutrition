
import { useState } from 'react';
import './App.css';
import FoodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  
  const [foods, setFoods] = useState(FoodsJson)

  return (
    <div className="App">
      <AddFoodForm foods= {foods} setFoods= {setFoods}/>
      
      {foods.map((food) => {
        return (
          <FoodBox food= {food} />

        )
      })
      }
    </div>
  );
}

export default App;
