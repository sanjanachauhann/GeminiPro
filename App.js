import { ContextProvider } from "./src/context/MyContext";
import StackScreen from "./src/screens/StackScreen";

export default function App() {
  return (
    <ContextProvider>
      <StackScreen />
    </ContextProvider>
  );
}
