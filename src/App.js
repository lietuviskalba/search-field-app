import React, { Component } from "react";
import './App.css';
import CardList from './CardList.js';
import SearchBox from "./SearchBox.js";
import { users } from './users';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            users: users,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredUsers = this.state.users.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <h1> User search app</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList users={filteredUsers} />
            </div>
        );
    }
}

export default App;