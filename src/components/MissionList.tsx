import { Mission } from "../App"; // Import the interface

interface MissionListProps {
  missions: Mission[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const MissionList = ({ missions, onToggle, onDelete }: MissionListProps) => {
  return (
    <ul>
      {missions.map((m) => (
        <li key={m.id} style={{ marginBottom: "10px", listStyle: "none" }}>
          {/* Checkbox to toggle completion */}
          <input
            type="checkbox"
            checked={m.isCompleted}
            onChange={() => onToggle(m.id)}
          />

          {/* Dynamic Style: Line-through if completed */}
          <span style={{ 
            textDecoration: m.isCompleted ? "line-through" : "none",
            margin: "0 10px"
          }}>
            {m.title}
          </span>

          <button onClick={() => onDelete(m.id)}>❌</button>
        </li>
      ))}

      {missions.length === 0 && <p>Rest easy, Shinobi. No missions assigned.</p>}
    </ul>
  );
};