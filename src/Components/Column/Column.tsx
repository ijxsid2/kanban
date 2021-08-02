import * as React from 'react'
import './Column.css'
import {  ColumnType, TaskType} from "../../ModelTypes/ModelTypes";
import Task from '../Task/Task';
import MutationsContext from "../../Containers/App/MutationsContext";


type Props = {
    column: ColumnType;
    columnTasks: TaskType[];
    columnIndex: number;
}

let Column = ({ column, columnTasks, columnIndex }: Props) => {
    
    const [isNameEditable, setIsNameEditable] = React.useState<boolean>(false)
    
    const mutations = React.useContext(MutationsContext);


    const onDoubleClick = () => {
        setIsNameEditable(true)
    }

    const onBlur = (e) => {
        setIsNameEditable(false);
        const value = e.target.value;
        mutations.editColumnName(columnIndex, value);
    }

    const onKeyDown = (e) => {
        if(e.key === "Enter") {
            setIsNameEditable(false);
            const value = e.target.value;
            mutations.editColumnName(columnIndex, value);
        }
    }

    const onAddTask = () => {
        mutations.addTask("Task", columnIndex);
    }
    
    const onDeleteColumn = () => {
        mutations.deleteColumn(columnIndex);
    }

    return (
        <div className="Column">
            { isNameEditable
              ? <textarea rows={1} onBlur={onBlur} onKeyDown={onKeyDown}>{column.name}</textarea>
              : <h3 className="Column__name" onDoubleClick={onDoubleClick}>
                <div>{column.name}</div>
                <button className="btn btn-error" onClick={onDeleteColumn}>
                    <i className="icon icon-delete"/>
                </button>
                </h3> 
            }


            <div className="Column__add-task">
                <button className="btn" onClick={onAddTask}>
                    +
                </button>
            </div>

            <ul className="Column__contents">
                {
                    columnTasks.map(
                        (task: TaskType) => (
                            <Task task={task} key={task.id} currentColumnIndex={columnIndex}/>
                        )
                    )
                }
            </ul>
        </div>
            
    )
}
export default Column;