import './Form.css'
import { useState } from 'react';

export default function Form({ setData, data }) {

    const [task, setTask] = useState('');
    const [category, setCategory] = useState('Others');
    const [priority, setPriority] = useState('Low');
    const [dateDone, setDateDone] = useState('--');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task === '') {
            alert('Debes colocar una tarea')
        } else {
            if ((data.findIndex(e => e.task.task.toLowerCase() === task.toLowerCase()) > -1)) {
                alert('Esta tarea ya la has colocado')
            } else {
                let dateWrote = new Date()

                setData(prev =>
                    [...prev, {
                        task: { task },
                        category: { category },
                        priority: { priority },
                        dateWrote: `${dateWrote.getDate()}-${dateWrote.getMonth()}-${dateWrote.getFullYear()}`,
                        dateDone: { dateDone },
                    }]
                )
            }
        }
    }

    return (
        <div className='containerForm'>
            <h1>To Do App</h1>
            <p>Add your tasks in the form bellow.</p>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTask(e.target.value)} name='task' type="text" placeholder="Write a task" />
                <input onChange={(e) => setCategory(e.target.value.toUpperCase())} type="text" placeholder="Write a category" />

                <div className="priorityContainer">
                    <label htmlFor="priority">Choose a priority for this task</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} name="priority" id="priority">
                        <option value="Low">Low priority</option>
                        <option value="Medium">Medium priority</option>
                        <option value="High">High priority</option>
                    </select>
                </div>
                <div className='dateTask'>

                    <label htmlFor="date">When you have to do it?</label>
                    <input onChange={(e) => setDateDone(e.target.value)} type="date" name="date" />
                </div>

                <input className='submit' type="submit" value='Add new task' />
            </form>
        </div>
    )
}


