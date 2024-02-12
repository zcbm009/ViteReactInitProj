import './App.css'
import { RouterProvider} from 'react-router-dom'
import MainRouter from '@/router/'

function App() {

  return (
    <>
    <a className='block' href='/task/'>Task</a>
    <RouterProvider router={MainRouter}></RouterProvider>
    </>
    
  )
}

export default App
