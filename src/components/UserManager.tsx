import { useState } from "react";

// The blueprint for the user object
interface User {
    id: number;
    name: string;
};

export const UserManager = () => {
    //The state: starts as an empty array of Users.
    const [users, setUsers] = useState<User[]>([]);

    // The action: this function runs when we click the button
    const addUser = () => {
        // Create a new single user object
        const newUser: User = {
            id: Date.now(), // Unique ID based on current time
            name: `Shinobi ${users.length +1}`, // Name based on the current number of users
        };

        // Update state: "[...users] copies the current list"
        // then we add "new User" to the end of it.
        setUsers([...users, newUser]);
    };

    {/* This function clears the entire list of users when called */ }
    const clearUsers = () => {
        setUsers([]);
    };

    return (
        <>
            <div style={{ padding: "20px"}}>
                <h2>Village Directory</h2>

                {/* The Button */}
                <button onClick={addUser}>Recruit New Shinobi</button>

                {/* Clear all button */}
                <button onClick={clearUsers}>Clear All Shinobi</button>

                {/* The List */}
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            ID: {u.id} | <strong>{u.name}</strong>
                        </li>
                    ))}
                </ul>

                {/* Showing a message if the list is empty */}
                {users.length === 0 && <p>No ninjas recruited yet.</p>}
                {/* It can also be written as */}
                {/* {users.length ===0 ? <p>No ninjas recruited yet.</p> : null} */}
            </div>
        </>
    );
};