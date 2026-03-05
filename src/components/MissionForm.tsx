import { useState, FormEvent } from "react";

interface MissionFormProps {
    onAdd: (title: string) => void; // The "Bridge" function to the parent
};

export const MissionForm = ({ onAdd }: MissionFormProps) => {
    const [title, setTitle] = useState(""); // State to hold the current input value

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (title.trim() === "") return; // Do not add empty missions

        onAdd(title); // Call the "Bridge" function with the current title
        setTitle(""); // Clear the input field after adding
    };

    return (
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter mission objective"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button type="submit">Assign Mission</button>
            </form>
    );
}