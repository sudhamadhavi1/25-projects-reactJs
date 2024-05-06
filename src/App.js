import './App.css';
import Accordian from './components/accordian';
import RandomColor from './random-color';
import StarRating from './star-rating';

function App() {
  return (
    <div className='App'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
