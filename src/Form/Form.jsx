import './Form.css'
import { useState } from 'react';

export default function Form({setData,setAllCategories}) {

    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [dateDone, setDateDone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let dateWrote = new Date()

        

        setData(prev =>
            [...prev,{  task: { task },
                category: { category },
                priority: { priority },
                dateWrote: `${dateWrote.getDate()}-${dateWrote.getMonth()}-${dateWrote.getFullYear()}`,
                dateDone: { dateDone }
            }]
        )
        
        setAllCategories(prev => [...prev,category])

    }

    return (
        <div className='containerForm'>
            <h1>To Do App EASY</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTask(e.target.value)} name='task' type="text" placeholder="Write a task" />
                <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Write a category" />

                <div className="priorityContainer">
                    <label htmlFor="priority">Choose a priority for this task</label>
                    <select onChange={(e) => setPriority(e.target.value)} name="priority" id="priority">
                        <option value="low">Low priority</option>
                        <option value="medium">Medium priority</option>
                        <option value="high">High priority</option>
                    </select>
                </div>
                <div className='dateTask'>

                    <label htmlFor="date">Para que dia lo tienes que hacer</label>
                    <input onChange={(e) => setDateDone(e.target.value)} type="date" name="date" />
                </div>

                <input type="submit" value='Add new task' />
            </form>
        </div>
    )
}


