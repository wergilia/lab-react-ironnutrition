import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            /* displayFood: this.props */
        }
        console.log(props)
    }

    search = (input) => {
        console.log(input)
    this.props.searchFood(input)
    }

    render() {
        return (<div>
            <input type="text" placeholder="Search food" onChange={e => this.search(e.target.value)} />
        </div>
        )
    }
}