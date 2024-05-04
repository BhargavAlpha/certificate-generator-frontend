import { useState } from 'react'
import AdminInterface from './components/AdminInrerface'
import Manage from './components/Manage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [create, setCreate] = useState(true);

  return (
    <div className='app'>
      <Navbar props={{ create, setCreate }} />
      {
        create ? <AdminInterface /> : <Manage/>
      }
  
    </div>
  )
}

export default App
