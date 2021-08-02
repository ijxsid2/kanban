import * as React from 'react'
import './Column.css'
import {  Column, Task} from "../../ModelTypes/ModelTypes";

type Props = {
    column: Column
    columnTasks: Task[]
}

let Column = ({ column, columnTasks }: Props) => (
    <div className="Column" key={column.name}>
        <h3 className="Column__name">
            {column.name}
        </h3>

        <div className="Column__add-task">
            <button className="btn">
                +
            </button>
        </div>
        <ul className="Column__contents">
            {
                columnTasks.map(
                    (task: Task) => (
                        <li className="Column__item card" key={task.id}>
                            <div className="card-header">
                                {task.title}
                            </div>
                        </li>
                    )
                )
            }
        </ul>
    </div>
            
)

export default Column;