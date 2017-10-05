import React from 'react';
import phrases from './phrases';

const Lorem = (props) => {
  let sentences = "";

  for (let i = 0; i < props.numSentences; i++) {
    let randomPick = Math.floor(Math.random() * phrases.length);
    sentences += phrases[randomPick] + " ";
  };

  return (
    <div>
      <p>{sentences}</p>
    </div>
  );
};

export default Lorem;