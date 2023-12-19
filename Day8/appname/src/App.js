// import logo from './logo.svg';
// import './App.css';
import WithLoadingx from "./Components/WithLoadingx";
import MyComponent from './Components/MyComponent';

const WrappedComponentWithLoadingx = WithLoadingx(MyComponent)

function App() {
  return (
    <div className="App">
      <WrappedComponentWithLoadingx/>
    </div>
  );
}

export default App;
