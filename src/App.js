import './App.css';
import Chart from './Charts';
import Chart1 from './Charts1';
import Piechart  from './Picharts';
import MySelect from './Select';
import Check  from './Checkboxes';
import GenerateCSV from './csvdiwnloader'

function App() {
  return (
    <div >
     <div className='bg_color'>
     <GenerateCSV />
     </div>
     {/* <div className='bg_color'>
     <Piechart />
     </div> */}
    </div>
  );
}

export default App;
