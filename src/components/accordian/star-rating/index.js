import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const starElements = [];

  console.log(Array(noOfStars));
  function handleClick(getCurrentIndex) {
    console.log('handleClick', getCurrentIndex);
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  const renderStars = () => {
    for (let i = 0; i < noOfStars; i++) {
      starElements.push(
        <FaStar
          key={i + 1}
          className={i + 1 <= (hover || rating) ? 'active' : 'inactive'}
          onClick={() => handleClick(i + 1)}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          onMouseLeave={() => handleMouseLeave()}
          size={40}
        />
      );
    }
    return starElements;
  };

  return (
    <div className='star-rating'>
      {/* - when  we want only index not the value we use array.map((_,index)
    - let noOfStars=4
console.log([...Array(noOfStars)])
o/p: Array(4)[ undefined,undefined,undefined,undefined ]
    
    */}
      {/* {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })} */}
      {renderStars()}
    </div>
  );
}
