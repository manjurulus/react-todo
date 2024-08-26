import { useState } from "react";
import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // Function to handle adding a new todo item
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput(""); // Clear the input field after adding
        }
    };

    // Function to handle removing a todo item
    const removeTodo = (indexToRemove) => {
        setTodos(todos.filter((_, index) => index !== indexToRemove));
    };

    // Function to handle the Enter key press
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addTodo();
        }
    };

    return (
        <div className="todo">
            <h1>Todo List</h1>
            <input 
                type="text" 
                placeholder="Enter a new todo" 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={handleKeyPress} // Listen for the Enter key
            />
            <button onClick={addTodo}>Add</button>
            <hr />
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => removeTodo(index)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
