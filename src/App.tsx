import ListGroup from "./components/ListGroup";
import DebrathDetail from "./components/DebrathDetail";
import { UserCard } from "./components/UserCard";
import { Counter } from "./components/Counter";
import { LightSwitch } from "./components/LightSwitch";
import { NinjaTeam} from "./components/NinjaTeam";
import { UserManager } from "./components/UserManager";
import { UserDirectManager } from "./components/UserDirect";

function App() {
  let items = ["New York", "San Fransisco", "Nepal", "Kathmandu"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <DebrathDetail></DebrathDetail>
      <UserCard username="Madara" isOnline={true} points={"high"} />
      <Counter />
      <LightSwitch />
      <NinjaTeam />
      <UserManager />
      <UserDirectManager />
    </div>
  );
}

export default App;
