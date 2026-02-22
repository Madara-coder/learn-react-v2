import { UserDirect } from "./UserDirectManager";

interface UserListProps {
    items: UserDirect[]; // The list of ninja objects to display
    onDelete: (id: number) => void; // Function to call when we want to delete a ninja
};

export const UserList = ({ items, onDelete}: UserListProps) => {
    return (
        <ul>
            {items.map((u) => (
                <li key={u.id} style={{margin: "10px"}}>
                    {u.name}
                    <button style={{marginLeft: "10px"}}
                    onClick={() => onDelete(u.id)}>Delete</button>
                </li>
            ))}

            {items.length === 0 && <p>The village is empty...</p>}
        </ul>
    );

};
