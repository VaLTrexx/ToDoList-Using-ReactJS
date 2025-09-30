import React, {useState} from "react";
import './Todo.css'
function ToDo(){
    const [tasks,setTasks]= useState([]);
    const[newtask,setnewtask] = useState("");
    function handleipchange(event){
        setnewtask(event.target.value);
    }
    function addtask(){
        if(newtask.trim()!==""){
            setTasks(t=>[...t,newtask]);
            setnewtask("");
        }
    }
    function deletetask(index){
        const updtask = tasks.filter((_,i)=>i!==index);
        setTasks(updtask);
    }
    function movetaskup(index){
        if(index>0){
            const updt=[...tasks];
            [updt[index],updt[index-1]]=[updt[index-1],updt[index]];
            setTasks(updt);
        }
    }

    return(
        <div className="to-do-list">
            <h1>TO DO LIST</h1>
            <div>
                <input
                type="text" 
                placeholder="Enter task"
                onChange={handleipchange}
                ></input>
                <button
                    className="add-button"
                    onClick={addtask}

                >ADD</button>

            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span class="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={()=>deletetask(index)}
                        >DELETE</button>
                        <button
                            className="move-button"
                            onClick={()=>movetaskup(index)}
                        >MOVE UP</button>
                    </li>
                )}
            </ol>

        </div>
    );
}
export default ToDo;