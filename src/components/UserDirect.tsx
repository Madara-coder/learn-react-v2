import { useState } from "react";

interface UserDirect {
    id: number;
    name: string;
}

export const UserDirectManager = () => {
    // 1. We need TWO states. One for the input, one for the list.
    const [name, setName] = useState("");
    const [users, setUsers] = useState<UserDirect[]>([]); // The list starts empty

    const addUser = () => {
        if (name.trim() === "") {
            alert("Please enter a name");
            return;
        }

        const newUser: UserDirect = {
            id: Date.now(),
            name: name,
        };

        // 2. Fixed: Wrapped in [ ] to make it a new array
        setUsers([...users, newUser]);

        // 3. Clear the input after adding
        setName("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Ninja Recruitment</h2>

            <div>
                <input
                    type="text"
                    value={name} // This is the "Controlled Component" part
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Ninja Name"
                />
                {/* 4. We need a button to trigger the function! */}
                <button onClick={addUser}>Add Ninja</button>
            </div>

            {/* 5. Show the list so we can see it working */}
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    );
};