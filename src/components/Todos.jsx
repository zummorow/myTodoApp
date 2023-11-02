import TodoItem from "./TodoItem"
// test di bawah di di ambil parameter test line 7
const Todos = ({test}) => {
    return (
        <div style={styles.container}>
            {/* test di bawah dari property di app.jsx 
                kegiatan di bawah adalah nilai dari map
            */}
            {test.map((kegiatan) => {
                return <TodoItem key={kegiatan.id} todo={kegiatan} />
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