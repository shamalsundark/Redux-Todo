
import './App.css'
import{Routes,Route} from 'react-router-dom'
import CreateTodo from './components/cards/CreateTodo'
import {useDispatch,useSelector} from 'react-redux'
function App() {
 
const {name} = useSelector(state => state.todo)
const dispatch = useDispatch()

  return (
    <>
     
     <Routes>
     <Route path="/todo" element={<CreateTodo />} />
     </Routes>
    </>
  )
}

export default App
