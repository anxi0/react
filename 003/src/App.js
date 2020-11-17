import "./App.css";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="" color="red" render />
      <Hello color="pink" name render={false} />
    </Wrapper>
  );
}

export default App;
