import React, { useState } from 'react'

const TodoEkle = ({doing, setDoing}) => {
const[buton, setButon]=useState(true)
const [text, setText]=useState("")
const [day, setDay]=useState("")

const handleSubmit=(e)=>{
e.preventDefault();
localStorage.setItem("todoList", JSON.stringify([...doing, {id:doing.length, text:text, day:day, isDone:false}]))

setDoing(JSON.parse(localStorage.getItem("todoList")))


setText("")
setDay("")
}

  return (
    <div>
    <header>
    
        <h1>
            TO DO APP
        </h1>
        <button onClick={()=>setButon(!buton)} className='btn' style={{backgroundColor:buton ? "green" : "purple"}}>{buton ?"CLOSE " : "SHOW "} ADD TASK BAR</button>
    </header>
    {buton && <form onSubmit={handleSubmit}>
        <div className='formControl'>
        <label htmlFor="text">Task</label>
        <input type="text" id="text" onChange={(e)=>setText(e.target.value)} value={text}/>
        </div>

        <div className='formControl'>
        <label htmlFor="day">Day&</label>
        <input type="datetime-local" id="day" onChange={(e)=>setDay(e.target.value)} value={day} />
        </div>

        <button type="submit" className='btn btn-submit' >SUBMIT</button>
    </form>}
    
    </div>
  )
}

export default TodoEkle