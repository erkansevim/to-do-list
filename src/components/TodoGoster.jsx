import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";



const TodoGoster = ({doing, setDoing}) => {
    
  return (
    <div>
    {doing.map((x)=>(
        <div>
            <h3>{x.text}
                <div>
                    <MdDeleteForever style={{color:"red", fontSize:"25px"}}/>
                    <FaCheckCircle style={{color:"red", fontSize:"25px"}}/>
                </div>
            </h3>
            <h6>
                {x.day}
            </h6>
        </div>
    ))}
    </div>
  )
}

export default TodoGoster