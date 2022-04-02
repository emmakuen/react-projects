import { AppContainer, Card, AddNewItem } from "./components/common";
import Column from "./components/Column";
import { useAppState } from "./context/AppStateContext";

function App() {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
