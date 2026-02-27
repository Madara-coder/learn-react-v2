import { useState, useEffect } from "react";
import axios from "axios";

// 1. Define the interface for the data we expect from the API
interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const ExternalNinjaList = () => {
  const [apiUsers, setApiUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 2. Define the async function inside useEffect
    const fetchUsers = async () => {
      try {
        setLoading(true);

        // 3. The Axios Magic
        // We use the <ApiUser[]> Generic to tell TS what 'data' looks like
        const response = await axios.get<ApiUser[]>(
          "https://jsonplaceholder.typicode.com/users"
        );

        // 4. Axios puts the JSON directly into the 'data' property
        setApiUsers(response.data);
      } catch (err) {
        // 5. Handle errors (Network error, 404, 500, etc.)
        setError("Failed to fetch ninjas from the cloud.");
      } finally {
        // 6. This runs no matter what (Success OR Error)
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Run once on mount

  // 7. UI Logic (Early returns for Loading and Error states)
  if (loading) return <p>⌛ Loading cloud ninjas...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>Cloud Ninjas (Fetched via Axios)</h3>
      <ul>
        {apiUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - <em>{user.username}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};