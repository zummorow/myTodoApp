import React, {useState} from "react"
import Todos from "./components/Todos"


function App () {
  // list merupakan pemanggilan nilai data
  // setlist : untuk men set nilai ke variabel list 
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  return(
    <div style={style.container}>
      <h1 style={style.title}>My Todo List</h1>
      {/* todos warna merah merupakan nama component dari Todos.jsx
          test warna biru apadalh props yg di kirim ke component
          list adalah nilai dari test yg di ambil dari cont list
      */}
      <Todos test={list} />
    </div>
    
  )
}

const style = {
  container : {
    textAlign: 'center',
    padding: '12px'
  },
  title:{
    fontSize: '36px'
  }
}

export default App