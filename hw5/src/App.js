import './App.css';
import Collapse from './components/Collapse';

function App() {
  return (
    <>
      <Collapse collapsedLabel='+' expandedLabel='-'>
        <span>Куку!</span>
      </Collapse>
      <Collapse>
        Я тебе щас как разверну!
      </Collapse>
    </>
  );
}

export default App;
