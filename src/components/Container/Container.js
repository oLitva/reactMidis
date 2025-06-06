import { Table } from "react-bootstrap-icons";
import Task from "../Task/Task.js";
import './Container.css'

export default function Container(){
    let tasks = ['Купть продукты', 'Сделать ДЗ', 'Сходить в кино'];

    return(
        <div className="container">
            {
                tasks.map((item, index)=>(
                    <Task 
                        name = {item} 
                        key={index}
                    />
                ))
            }
        </div>
    );
}