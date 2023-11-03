const TodoItem = ({todo, toggleCompleted}) => {
  
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
    </div>
  )
}


// kumpulan css
const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
}
export default TodoItem