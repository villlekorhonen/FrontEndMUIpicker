import React from "react";
import { useState } from "react";
import TodoTable from "./TodoTable";
import { DatePicker } from "@mui/x-date-pickers";

export default function TodoList() {
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
    const [dateValue, setDateValue] = useState('');

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ desc: '', date: ''});
        
    }

    const deleteTodo = (index) => {
        const updateTodos = todos.filter((_, i) => i !== index);
        setTodos(updateTodos);
    }

    const datePicker = (newValue) => {
        setTodo({...todo, date: newValue.format('YYYY-MM-DD')})
        setDateValue(newValue);
        console.log(newValue);

    }
    

    return (
        <div>
            <h1>TodoList</h1>
      <fieldset>
        <legend>Add New Todo</legend>
        <label>Date:</label>
        <DatePicker value={dateValue} onChange={datePicker}/>
      <form onSubmit={addTodo}>
       {/* <label>Date:</label> // Vanhan version date piilossa kommenteilla!!
        <input type="date" name="date" value={todo.date} onChange={inputChanged} /> */}
        <label>Description:</label>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>
      </fieldset>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

