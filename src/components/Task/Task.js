import { useState } from 'react';
import { PencilFill,  TrashFill, } from 'react-bootstrap-icons';
import './task.css'
export default function Task({name}){
    const [isVisible, setIsVisible] = useState(true);

    const taskRemove = () => {
        console.log("Deleted");
        setIsVisible(false)
    }
    const taskEdit = () => {
        console.log("Edit");
    }

    return(
        <div className={isVisible? 'task':'hide'}>
            <span>{name}</span>
            <PencilFill className='btn-edit ' onClick={taskEdit}/>
            <TrashFill className='btn-remove' onClick={taskRemove}/>
            <br/>
        </div>
    );
}
