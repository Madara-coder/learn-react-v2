import { useState, useEffect } from "react";
import { MissionForm } from "./components/MissionForm";
import { MissionList } from "./components/MissionList";

// 1. Define the Interface (The "Blueprint")
export interface Mission {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function App() {
  // 2. STATE: Initialize from LocalStorage (Lazy Loading)
  const [missions, setMissions] = useState<Mission[]>(() => {
    const saved = localStorage.getItem("shinobi_missions");
    return saved ? JSON.parse(saved) : [];
  });

  // 3. PERSISTENCE: Save whenever the mission list changes
  useEffect(() => {
    localStorage.setItem("shinobi_missions", JSON.stringify(missions));
  }, [missions]);

  // 4. LOGIC: Add a new mission
  const addMission = (title: string) => {
    const newMission: Mission = {
      id: Date.now(),
      title: title,
      isCompleted: false,
    };
    setMissions([...missions, newMission]);
  };

  // 5. LOGIC: Toggle completion (The most important logic)
  const toggleMission = (id: number) => {
    setMissions(
      missions.map((m) =>
        m.id === id ? { ...m, isCompleted: !m.isCompleted } : m
      )
    );
  };

  // 6. LOGIC: Delete a mission
  const deleteMission = (id: number) => {
    setMissions(missions.filter((m) => m.id !== id));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Leaf Village Mission Board</h1>
      <hr />

      {/* Input Component */}
      <MissionForm onAdd={addMission} />

      {/* Display Component */}
      <MissionList
        missions={missions}
        onToggle={toggleMission}
        onDelete={deleteMission}
      />
    </div>
  );
}