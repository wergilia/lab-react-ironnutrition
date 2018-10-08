import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'

export default class AddNewFood extends React.Component {   
    constructor() {       
        super();
        this.state = {
            name: '',
            calories: 0,
            image: ''        
        }
    }
        
    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })    
    }

    handleCaloriesInput = (event) => {
        this.setState({
            calories: event.target.value
        })
    }

    handleImageInput = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let {name, calories, image} = this.state;
        if(name === '') return this.setState({error:'Add a food name to submit'});
        if(calories === '') return this.setState({error: 'Add calories to submit'});
        if(image === '') return this.setState({error:'Add an image url to submit'});
    
        this.props.addNewFood(this.state);
        this.setState({error:'', name:'', calories:'', image:''});

    }

    render() {
        let {name, calories, image} = this.state;
        return (            
            <div>
            
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => this.handleNameInput(e)}/>

                    <label>Calories</label>
                    <input type="number" name="calories" value={calories} onChange={(e) => this.handleCaloriesInput(e)}/>

                    <label>Image</label>
                    <input type="file" name="images" value={image} onChange={(e) => this.handleImageInput(e)} />

                    <input type="submit" value="Submit" />

                    {/* <button onClick={this.handleFormSubmit.bind(this)}Add new food />  */}
                </form>
            </div>
        )}
}
