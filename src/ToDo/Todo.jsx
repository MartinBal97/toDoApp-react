import './Todo.css'

export default function ToDo({ task }) {


    return (
        <div className='containerToDo'>
        {
            
               
                <div className='containerToDoes'>
                    <div>
                        <div className="dates">
                            <p>DAY WROTE <br /> {task.dateWrote}</p>
                            <p>DAY TO FINISH IT <br />{task.dateDone.dateDone}</p>
                        </div>
                        <p className="task">{task.task.task}</p>
                    </div>
                    <div className="buttons">
                        <button className="btn done">OK</button>
                        <button className="btn delete">X</button>
                    </div>
                </div>
            
           
        }
    </div>
    )
}


