import "./App.css";
import { AddTodos } from "./components/AddTodos";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-container flex flex-col gap-4 max-w-md mx-auto p-4">
      <AddTodos />
      <TodoList />
    </div>
  );
}

export default App;
