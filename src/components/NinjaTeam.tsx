const ninjas = ["Naruto", "Sasuke", "Sakura", "Kakashi"];

export const NinjaTeam = () => {
    return (
        <>
            <div>
                <h2>Team 7</h2>
                <ul>
                    {ninjas.map((ninja) => (
                        <li key={ninja}>{ninja}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}