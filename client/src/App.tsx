import { ConnectionManager } from "./components";
import { useSocket } from "./hooks/useSocket";

function App() {
  const { isConnected } = useSocket();

  console.log(isConnected);
  return (
    <>
      <ConnectionManager />
      <h1>Init</h1>
    </>
  );
}

export default App;
