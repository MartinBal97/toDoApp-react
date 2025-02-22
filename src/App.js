import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Form/Form.jsx";
import Todolist from "./Todolist/Todolist";
import Category from "./Category/Category";

function App() {
  const [data, setData] = useState([]);
  const [tasksSameCategory, setTasksSameCategory] = useState(data);

  useEffect(() => {
    setTasksSameCategory(data);
  }, [data]);

  return (
    <div id="app">
      <div className="main">
        <Form data={data} setData={setData} />
        <Todolist
          tasksSameCategory={tasksSameCategory}
          data={data}
          setData={setData}
        />
        <Category
          tasksSameCategory={tasksSameCategory}
          setTasksSameCategory={setTasksSameCategory}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
