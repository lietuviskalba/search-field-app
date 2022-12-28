import React from "react";
import Card from "./Card";

const CardList = ({ users }) => {
    const cardArray = users.map(user => {
        return (
            <Card
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
            />
        )
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;