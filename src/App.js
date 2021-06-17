import logo from './logo.svg';
import './App.css';
import "./core-store"; 
import "./block-store"; 
import { withSelect } from "./store"; 
import { compose } from "./compose"; 

const App = (props) => {
  console.log("props: ", props)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Redux store registration hook for custom store</h3>
      </header>
    </div>
  );
}

export default compose(withSelect(select => {
  const { getCurrentUser } = select('prism-store/core');
  const { getBlocks } = select('prism-store/blocks');
  return { user: getCurrentUser(), blocks: getBlocks() }
}))(App);
