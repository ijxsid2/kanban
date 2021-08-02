import * as React from 'react'
import './Column.css'
import {  ColumnType, TaskType} from "../../ModelTypes/ModelTypes";
import Task from '../Task/Task';

type Props = {
    column: ColumnType;
    columnTasks: TaskType[];
    addTask: () => void;
}

let Column = ({ column, columnTasks, addTask }: Props) => {
    const [isNameEditable, setIsNameEditable] = React.useState<boolean>(false)

    const onDoubleClick = () => {
        setIsNameEditable(true)
    }

    const onBlur = () => {
        setIsNameEditable(false);
    }
    return (
        <div className="Column">
            { isNameEditable
              ? <textarea rows={1} onBlur={onBlur}>{column.name}</textarea>
              : <h3 className="Column__name" onDoubleClick={onDoubleClick}>
                {column.name}
                </h3> 
            }


            <div className="Column__add-task">
                <button className="btn" onClick={addTask}>
                    +
                </button>
            </div>
            <ul className="Column__contents">
                {
                    columnTasks.map(
                        (task: TaskType) => (
                            <Task task={task} key={task.id}/>
                        )
                    )
                }
            </ul>
        </div>
            
    )
}
export default Column;