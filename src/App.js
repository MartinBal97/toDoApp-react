import './App.css';
import { useState } from 'react';
import Form from './Form/Form.jsx'
import Todolist from './Todolist/Todolist';
import Category from './Category/Category';

function App() {
  
  const [data, setData] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  return (
    <div id='app'>
      <div className="main">
        <Category allCategories={allCategories}/>
        <Todolist data={data} />
        <Form setData={setData} setAllCategories={setAllCategories} />
      </div>
    </div>
  );
}

export default App;
