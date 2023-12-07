import React, { useState } from 'react';
import Star from './star';

const StarRating = ({ totalStars = 5, onRating }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleSelect = (index) => {
    setSelectedStars(index + 1);
    onRating(index + 1); // Call the onRating function passed from the parent
  };

  return (
    <div>
      {[...Array(totalStars)].map((n, i) => (
        <Star 
          key={i} 
          selected={i < selectedStars} 
          onSelect={() => handleSelect(i)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;