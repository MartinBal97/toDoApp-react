import './Todo.css'

export default function ToDo({ task, data, setData}) {
    
    const btnDelete = (ev) => {
        // ev.target.parentElement.parentElement.remove()
       setData(data.filter(e => e.task.task !== ev.target.parentElement.previousElementSibling.lastChild.firstChild.innerText))
    }

    const btnDone = (e) => {
        e.target.parentElement.previousElementSibling.classList.toggle('tachado')
    }
    
    return (
        <div className='containerToDo'>
        {
                <div className='containerToDoes'>
                    <div>
                        <div className="dates">
                            <p>DAY WROTE <br /> {task.dateWrote}</p>
                            <p>DAY TO FINISH IT <br />{task.dateDone.dateDone}</p>
                        </div>
                        <div className='taskPriority'>
                            <p className="task">{task.task.task}</p>
                            <p className={task.priority.priority}>Priority: {task.priority.priority}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={btnDone} className="btn done">Done</button>
                        <button onClick={btnDelete} className="btn delete">X</button>
                    </div>
                </div>
            
        }
    </div>
    )
}


