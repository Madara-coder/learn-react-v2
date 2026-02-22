import { UserForm } from "./UserForm";
import { useState } from "react";
import { UserList } from "./UserList";

// Define the structure of a user object
export interface UserDirect {
    id: number;
    name: string;
};

export const UserDirectManager = () => {
    const [users, setUsers] = useState<UserDirect[]>([]); // State to hold the list of users

    // This is the function we will give to the child component (UserForm) to call when a new user is added
    const handleAddUser = (name:string) => {
        const newUser = {
            id: Date.now(), // Unique ID based on current time
            name: name, // Name from the form input
        };

        setUsers([...users, newUser]); //Add the new user to the existing list of users.
    };

    // This is the function inorder to handle deleting a user.
    const handleDeleteUser = (id: number) => {
        setUsers(users.filter((u) => u.id !== id));
    };

    return (
        <>
            <div>
                <h2>Village Directory</h2>

                {/* We pass the "handleAddUser" function as a prop to the UserForm component */}
                <UserForm onAddUser={handleAddUser} />

               {/* Using UserList component and pass the data/function */}
               <UserList items={users} onDelete={handleDeleteUser} />
            </div>
        </>
    );
};
