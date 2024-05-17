import './App.css';
import Accordian from './components/accordian/accordian';
import ImageSlider from './components/accordian/image-slider';
import RandomColor from './components/accordian/random-color';
import StarRating from './components/accordian/star-rating';

function App() {
  return (
    <div className='App'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={'10'}
        page={'1'}
      />
    </div>
  );
}

export default App;
