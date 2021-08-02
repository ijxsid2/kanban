import * as React from 'react'
import './Task.css'
import {TaskType} from "../../ModelTypes/ModelTypes";

type Props = {
    task: TaskType
}

let Task = ({ task }: Props) => (
    <li className="Column__item card" key={task.id}>
        <div className="card-header">
            {task.title}
        </div>
    </li>
)

export default Task;