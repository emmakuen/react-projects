import { AppContainer, Card, AddNewItem } from "./components/common";
import Column from "./components/Column";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate App Scaffold" />
      </Column>
      <Column text="To Do">
        <Card text="Generate App Scaffold" />
      </Column>
      <Column text="To Do">
        <Card text="Generate App Scaffold" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
