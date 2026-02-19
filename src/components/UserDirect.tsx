import { useState, useEffect, FormEvent } from "react";

interface UserDirect {
    id: number;
    name: string;
}

export const UserDirectManager = () => {
    // 1. We need TWO states. One for the input, one for the list.
    const [name, setName] = useState("");

     // EFFECT 1: Load data from LocalStorage when the app starts
    const [users, setUsers] = useState<UserDirect[]>(() => {
        const saved = localStorage.getItem("my_ninjas");
        return saved ? JSON.parse(saved) : [];
    });

    // EFFECT 2: Save to LocalStorage whenever 'users' state changes
    useEffect(() => {
        localStorage.setItem("my_ninjas", JSON.stringify(users));
    }, [users]); // Runs whenever 'users' is updated

    const addUser = (e: FormEvent) => {
        e.preventDefault();  // Prevent form submission from refreshing the page
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

    const removeUser = (id: number) => {
        setUsers(users.filter((u) => u.id !== id));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Ninja Recruitment</h2>

            <form onSubmit={addUser}>
                <input
                    type="text"
                    value={name} // This is the "Controlled Component" part
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Ninja Name"
                />

                {/* 4. We need a button to trigger the function! */}
                <button type="submit">Add Ninja</button>
            </form>


            {/* 5. Show the list so we can see it working */}
            <ul>
                {users.map((u) => (
                    <li key={u.id} style={{ marginBottom: "10px" }}>
                        {u.name}
                        <button
                            onClick={() => removeUser(u.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            Dismiss
                        </button>
                    </li>
                ))}
            </ul>

            {users.length === 0 && <p>The village is empty...</p>}
        </div>
    );
};