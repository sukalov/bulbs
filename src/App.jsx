import React, { useState } from "react";
import Bulbs from "./Bulbs";
import PatternSelector from "./PatternSelector";

const App = () => {

  const [selectedPattern, setSelectedPattern] = useState('');

  const handlePatternSelect = (patternToHandle) => {
    setSelectedPattern(patternToHandle);
  };

  console.log(selectedPattern)
  return (
    <>
      <div className='screen-container'>
        {selectedPattern ? selectedPattern.map(el => <Bulbs pattern={el} />) : null}
      </div>
        <PatternSelector onPatternSelect={handlePatternSelect} />
    </>
  );
};


export default App;