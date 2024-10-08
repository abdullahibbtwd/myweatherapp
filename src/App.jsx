import React from 'react'
import Side from './componnents/Side'
import Content from './componnents/Content'
import Aside from './componnents/Aside'
import Test from './componnents/Test'

const App = () => {
  return (
    <div className='main'>
      <div className="sidebar">
        <Side/>
      </div>
      <div className="content">
        <Content/>
      </div>
     
   
    </div>
  )
}

export default App