import React from "react";

export default function TodoTable(props) {

  

    return(
        <div>
             <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            props.todos.map((todo, index) =>
              <tr key={index}>
                
                <td className='date-cell'>
                  {new Date(todo.date).toLocaleDateString('fi-FI')}
                  </td>
                <td className='desc-cell'>{todo.desc}</td>
                <button onClick={() => props.deleteTodo(index)} >Delete</button>
              </tr>
            )}
        </tbody>
      </table>

        </div>
    )
}
