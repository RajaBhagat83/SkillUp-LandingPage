import React from 'react'
import Top from './Components/Top'
import Taskbar from './Components/Taskbar'
import Video from './Components/Video'
import Middle from './Components/Middle'
import Bottom from './Components/Bottom'

function App() {
  return (
    <div className='overflow-hidden'>
       <Top />
       <Middle />
       <Bottom />
    </div>
  )
}

export default App
