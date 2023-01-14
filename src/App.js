import { useState } from 'react';
import './App.css';
import InputText from './components/InputText';
import ListText from './components/ListText';

function App() {

const [listQuestion, setListQuestion] = useState([]);
const [listAnswer, setListAnswer] = useState([]);

  return (
    <div className='wrap'>
      <InputText
      listQuestion={listQuestion}
      setListQuestion={setListQuestion}
      listAnswer={listAnswer}
      setListAnswer={setListAnswer}
      />
      <ListText
      listQuestion={listQuestion}
      listAnswer={listAnswer}
      />
    </div>
  );
}

export default App;
