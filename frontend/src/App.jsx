
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Courses from './courses/Courses'
import Home from './home/Home'

import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
   {/* <Home/>
   <Course/> */}
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/course" element={<Courses />} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/about' element={<About />}/>
   </Routes>
   </div>
    </>
  )
}

export default App
