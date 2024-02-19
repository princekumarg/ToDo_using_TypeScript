import AddTodo from './AddTodo'
import './App.css'
import TodoList from './TodoList'
import { TodoProvider } from './TodoProvider'

function App() {

  return (
    <TodoProvider>
        <h2>ToDos</h2>
        <AddTodo/>
        <TodoList/>
    </TodoProvider>
    
    
  )
}

export default App
