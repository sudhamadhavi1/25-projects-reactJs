import './App.css';
import Accordian from './components/accordian/accordian';
// import ImageSlider from './components/accordian/image-slider';
// import LoadMoreData from './components/accordian/load-more-button';
// import RandomColor from './components/accordian/random-color';
// import StarRating from './components/accordian/star-rating';
import TreeView from './components/accordian/tree-view';
import menus from './components/accordian/tree-view/data';
// import QRCodeGenerator from './components/accordian/qr-code-generator/index';
// import LightDarkMode from './components/accordian/light-dark-mode/index';

function App() {
  return (
    <div className='App'>
      <Accordian />
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={'10'}
        page={'1'}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
    </div>
  );
}

export default App;
