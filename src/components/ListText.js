import React from 'react'

const ListText = (props) => {
  const { listQuestion, listAnswer } = props;

  const result = listQuestion.map((v, i) => {
    return {
      Q: listQuestion[i],
      A: listAnswer[i]
    };
  });

  return (
    <div className='list-text'>
      {result.map((res, index) => (
        <div key={index} className='list-qa'>
          <label>Q: {res.Q}</label>
          <p>A: {res.A}</p>
        </div>
      ))}
    </div>
  )
}

export default ListText;