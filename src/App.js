
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <Button size={"large"} color={"teal"} >Click Me</Button>
     <Button size={"medium"} color={"red"}>Check it</Button>
     <Counter/>
    </div>
  );
}

export default App;
