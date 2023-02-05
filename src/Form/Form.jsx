import './Form.css'

export default function Form() {

    
    return (
        <div className='containerForm'>
            <h1>To Do App EASY</h1>

            <form action="">

                <input type="text" placeholder="Write a task"/>
                <input type="text" placeholder="Write a category"/>

                <div className="priorityContainer">
                    <label htmlFor="piority">Choose a priority for this task</label>
                    <select name="priority" id="priority">
                        <option value="low">Low priority</option>
                        <option value="medium">Medium priority</option>
                        <option value="high">High priority</option>
                    </select>
                </div>


            </form>

        </div>
    );
}


