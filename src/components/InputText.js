import { TextField } from '@mui/material';
import React, { useState } from 'react'

const InputText = (props) => {
  const { listQuestion, setListQuestion, listAnswer, setListAnswer } = props;

  const [inputQuestion, setInputQuestion] = useState([]);
  const [inputAnswer, setInputAnswer] = useState([]);

  const handleQuestion = (e) => {
    setInputQuestion(e.target.value);
  }

  const handleAnswer = (e) => {
    setInputAnswer(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setListQuestion([
      ...listQuestion,
      inputQuestion
    ]);

    setListAnswer([
      ...listAnswer,
      inputAnswer
    ]);

    setInputQuestion("");
    setInputAnswer("");

  }


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <p>fetch</p>
          <TextField
            multiline
            className='text-field'
            label="Question"
            variant="outlined"
            onChange={(e) => handleQuestion(e)}
            value={inputQuestion}
          />
        </div>

        <div>
          <p>Answer</p>
          <TextField
            multiline
            className='text-field'
            label="Answer"
            variant="outlined"
            onChange={(e) => handleAnswer(e)}
            value={inputAnswer}
          />
        </div>

        <div>
          <input
            className='button'
            type="submit"
            value="create"
          />
        </div>
      </form>
    </div>
  )
}

export default InputText;