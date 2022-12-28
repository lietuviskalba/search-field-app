import React, { Component } from "react";
import './App.css';
import CardList from './CardList.js';
import SearchBox from "./SearchBox.js";
// import { users } from './users';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // fetch make request from servers (part of the window object)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usersFromJSON => this.setState({ users: usersFromJSON }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredUsers = this.state.users.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.users.length === 0) {
            return <h1 className="tc"> Loading users </h1>
        } else {
            return (
                <div className="tc">
                    <h1> User search app</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList users={filteredUsers} />
                </div>
            )
        }
    }
}

export default App;