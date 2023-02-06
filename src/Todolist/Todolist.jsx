import ToDo from '../ToDo/Todo'

export default function Todolist({data}) {

  return (
      <div className='containerTodolist'>
      {
          data.map((task,i) => <ToDo task={task} indice={i} key={i} />) 
      } 
      </div>
  );
}

