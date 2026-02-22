import { useState, FormEvent } from "react";

// 1. Define what the Parent MUST provide to this child component
interface UserFormProps {
    // We want the parent to give us a function to call when we're done
    onAddUser: (name: string) => void;
};

export const UserForm = ({ onAddUser}: UserFormProps) => {
    const [name, setName] = useState(""); // This state stays local to the form.

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior (page refresh)
        if (name.trim() === "") return;

        // 2. Instead of setUsers, we call the "Callback" function from props
        onAddUser(name); // This sends the new user's name up to the parent component

        // 3. Clear our local input field after submission
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter ninja name"
            />
            <button type="submit">Add Ninja</button>
        </form>
    );
};