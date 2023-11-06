// Lakukan import hook "useContext" dari React dan "TodoContext" dari App.jsx
import React, {useContext} from "react"
import { TodoContext } from "../App"

// Hapus toggleCompleted dan deleteTodo dari props
const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext)
  
  // Definisikan function toggleCompleted di sini
  // const toggleCompleted = () => {
  //   console.log('toggleCompleted function is called')
  // }

  // mengubah css ketika nilai object true
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }
  
  return (
    <div style={styles.todoItem}>
      <input 
        type="checkbox" 
        style={styles.checkbox} 
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  )
}


// kumpulan css
const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}
export default TodoItem