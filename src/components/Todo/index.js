import React, {pureComponent} from 'react';
import "./Todo.css"
import Utility from "../../utility"

class Todo extends pureComponent {
    state = {  
       input: "",
       items:[]
    } 

    render() { 
        const {input , items} = this.state     
        return (
        <div className='todoapp container'>
           <form className=' p-4 w-full rounded-md' onSubmit={(event)=>Utility.storeItem(event,this)} type="button" > <h1 className= 'text-3xl font-semibold'> TODOAPP</h1>
            <input type="text" placeholder='Enter Items...' name='input' value={input} onChange={(event)=>Utility.handleChange(event,this) } className='bg-cyan-900/20 P-1 text-[15px] input rounded-sm w-full border border-cyan-500'/>
            </form>
            <ul className='hi flex flex-col gap-2 box-border rounded-xs pt-4 p-0'>
                {items.map((val,i)=>{
                    return (<li className='input flex' key={i}> {val} <i onClick={()=>Utility.deleteItem(i,this)} className="w-3 cursor-pointer text-sm fa-solid text-right flex-1 fa-trash fa-fade"></i>
                    </li>)
                   })}
            </ul>
        </div>

    )
    }
}
 
export default Todo;