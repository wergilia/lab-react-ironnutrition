import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import AddNewFood from './AddNewFood';

export default class FoodBox extends Component { /* export default function({calories, image, name, quantity}) */
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            quantity: 1,
            calories: props.calories,
            image: props.image
        }
    
    }

    handleFormSubmit(){
        let {name, quantity, calories} = this.state;
        calories = calories * quantity
    }

    render(){        
        return (     
                <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.state.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.state.name}</strong> <br />
                                <small>{this.state.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.quantity} onChange={e => this.setSate({quantity: e.target.value})} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.handleFormSubmit.bind(this)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        
        )
    }
}


