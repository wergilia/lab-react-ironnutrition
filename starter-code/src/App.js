import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'
import AddNewFood from './AddNewFood';
import { SearchBar } from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allFoods: foods,
      foodFormVisible: false,
      totalCalories: 0,
      today: []
    }
  }

  showFoodForm = () => {
    this.setState({ foodFormVisible: !this.state.foodFormVisible })
  }

  addNewFood = food => {
    console.log(food)
    this.state.allFoods.push(food);
    this.setState({
      displayedFoods: this.state.allFoods,
      allFoods: this.state.allFoods,
      foodFormVisible: !this.state.foodFormVisible
    })
  }

  searchFood = input => {

    let word = input.toLowerCase()
    let filtered = this.state.allFoods.filter(e => e.name.toLowerCase().includes(word));
    this.setState({ allFoods: filtered })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title" IronNutrition></h1>

        </header>




        <SearchBar {...this.state.displayedFoods} searchFood={food => this.searchFood(food)} />

        <AddNewFood addNewFood={this.addNewFood} />

        {this.state.allFoods.map((e) => {
          return <FoodBox class="column content" key={e.name} {...e} />

        })}
      </div>
    );
  }
}

export default App;
