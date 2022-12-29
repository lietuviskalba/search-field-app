import React, { Component } from "react";
import './App.css';
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll.js';
import CardList from '../Components/CardList.js';
import ErrorBoundary from "../Components/ErrorBoundary";

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

    // Used for the search box to detect and give changes
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { users, searchField } = this.state;
        const filteredUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !users.length ?
            <h1 className="tc"> Loading users </h1>
            :
            <div className="tc">
                <h1> User search app</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList users={filteredUsers} />
                    </ErrorBoundary>
                </Scroll>
            </div>

    }
}


export default App;