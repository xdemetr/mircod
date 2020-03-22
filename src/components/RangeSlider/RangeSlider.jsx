import React from 'react';
import Slider from 'react-rangeslider';

import './RangeSlider.sass';

const RangeSlider = ({min,  max, value, onChange}) => {

  const labels = {
    min: `${min}m`,
    max: `${max}m`
  };

  return (
    <div className="range-slider">
      <Slider
        min={min} max={max}
        value={value}
        onChange={onChange}
        labels={labels}
        tooltip={false}
      />
    </div>
  );
};

export default RangeSlider;
