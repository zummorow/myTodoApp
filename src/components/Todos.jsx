import TodoItem from "./TodoItem"
// test di bawah di di ambil parameter test line 7
const Todos = ({todos, toggleCompleted, deleteTodo}) => {
    return (
        <div style={styles.container}>
            {/* test di bawah dari property di app.jsx 
                kegiatan di bawah adalah nilai dari map
            */}
            {todos.map((todo) => {
                return (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleCompleted={toggleCompleted} 
                    deleteTodo={deleteTodo}
                />
                )
            })}
        </div>
    )
}

const styles = {
    container: {
      width: '40%',
      margin: '0 auto',
    },
  }
export default Todos