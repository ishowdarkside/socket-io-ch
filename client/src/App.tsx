import { ConnectionManager } from "./components";
import { useSocket } from "./hooks/useSocket";

function App() {
  const { isConnected, handleConnect } = useSocket();

  console.log(isConnected);
  return (
    <>
      <ConnectionManager onConnect={handleConnect} />
      <h1>Init</h1>
    </>
  );
}

export default App;
