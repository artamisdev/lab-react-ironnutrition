
import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm({foods, setFoods}) {

    const [form, setForm] = useState ({
        name: "",
        image: "",
        calories: "",
        servings: ""
    }
    )
    
    function handleChange(e) {
        setForm({...form,[e.target.name]: e.target.value })
    } 
        
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foods.name} name="name" type="text" onChange={handleChange} />

      <label>Image</label>
      <Input value={foods.image} name="image" type="text" onChange={handleChange} />

      <label>Calories</label>
      <Input value={foods.calories} name="calories" type="text" onChange={handleChange} />

      <label>Servings</label>
      <Input value={foods.servings} name="servings" type="text" onChange={handleChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;


