import React from "react";
import CardList from './CardList.js';
import SearchBox from "./SearchBox.js";
import { users } from './users';

const App = () => {
    return (
        <div className="tc">
            <h1> User search app</h1>
            <SearchBox />
            <CardList users={users} />
        </div>
    );
}

export default App;