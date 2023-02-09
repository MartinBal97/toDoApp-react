import ToDo from '../ToDo/Todo'

export default function Todolist({data, setData,tasksSameCategory}) {

  

  return (
      <div className='containerTodolist'>
      {
        tasksSameCategory.map((task,i) => <ToDo setData={setData} task={task} data={data} key={i} />) 
      } 
      </div>
  );
}

