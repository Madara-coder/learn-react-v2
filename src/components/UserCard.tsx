interface UserCardProps {
    username: string;
    isOnline: boolean;
    points: string;
}

export const UserCard = (props: UserCardProps) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px"}}>
            <h2>User: {props.username}</h2>
            <h2>Status: {props.isOnline ? "🟢 Online" : "🔴 Offline"}</h2>
            <h2>Points: {props.points}</h2>
        </div>
    );
};