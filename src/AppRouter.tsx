
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Input from './components/Input'
import Crud from './components/Crud'
import { useState } from 'react'

const AppRouter = () => {
    const[inputValue,setinputValue]=useState('')
    return (
        <BrowserRouter>
    <Routes>
        <Route path='/' element={<Crud/>}/>
        <Route path='/ADD' element={ <Input
        value={inputValue}
        onChange={(e:any) => setinputValue(e.target.value)}
        type="text" id="name" name="name"
         placeholder="Put in your fullname."
         className="border border-gray-300 shadow p-3 w-full rounded"
      />}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
