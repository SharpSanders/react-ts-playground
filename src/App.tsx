import { Header } from "./components/Header";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Header />
      <Counter initialCount={5} />
    </div>
  );
}

export default App;


