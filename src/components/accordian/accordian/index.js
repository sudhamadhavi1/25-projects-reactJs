// single Selection
// multiple Selection
import { useState } from 'react';
import data from './data';
import './styles.css';

export default function Accordian() {
  // selected is used for singleselect to identify the selected one.
  // multiple is used when we have multiple items.
  const [selected, setSelected] = useState(null);
  console.log('selected', selected);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log('getCurrentId', getCurrentId);
    // when pressed for 1st time it takes selected=id, when the same thing is pressed 2nd time then selectedId = currentid it takes null value
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    // we try to find of wether the element is present or not. If not present we push. If not
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    // we are removing as we will be pressing for the 2nd time, so that it is being present in the list.
    setMultiple(copyMultiple);
  }

  return (
    <div className='wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item'>
              <div
                className='title'
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? // We use when item is in multiple list or not we ued !==-1
                  multiple.indexOf(dataItem.id) !== -1 && (
                    <div className='content'>{dataItem.answer} </div>
                  )
                : // when single select , what item is selected, that item should only be displayed.
                  selected === dataItem.id && (
                    <div className='content'>{dataItem.answer} </div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className='content'>{dataItem.answer} </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data found !</div>
        )}
      </div>
    </div>
  );
}
