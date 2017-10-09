import React from 'react';
import phrases from './phrases';

const Lorem = (props) => {
  let sentence = "";
  let paragraph = [];


  for (let i = 0; i < props.numSentences; i++) {
    // for (let _i = 0; _i < 5; _i++) {
      // let randomPick = Math.floor(Math.random() * phrases.length);
      // sentences += phrases[randomPick] + " ";
      // sentences = sentences.charAt(0).toUpperCase() + sentences.slice(1);
      phrases.sort(function() {
        return 0.1 - Math.random();
      });
      sentence = phrases.slice(0, 5).join(' ') + ". ";
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
      paragraph.push(sentence)
    // };
  };



  return (
    <div className="animated fadeInUp">
      <p>{paragraph}</p>
    </div>
  );
};

export default Lorem;