import * as React from 'react'
import './Task.css'
import {TaskType} from "../../ModelTypes/ModelTypes";
import MutationsContext from "../../Containers/App/MutationsContext"

type Props = {
    task: TaskType,
    currentColumnIndex: number
}

let Task = ({ task, currentColumnIndex }: Props) => {
    const [isEditable, setIsEditable] = React.useState<boolean>(false)
    const mutations = React.useContext(MutationsContext);

    const onDoubleClick = () => {
        setIsEditable(true)
    }

    const onBlur = (e) => {
        setIsEditable(false);
        const value = e.target.value;
        mutations.editTask(task.id, value);
    }

    const onKeyDown = (e) => {
        if(e.key === "Enter") {
            setIsEditable(false);
            const value = e.target.value;
            mutations.editTask(task.id, value);
        }

    }

    const onMoveTaskLeft = () => {
        mutations.moveTaskToColumn(task.id, currentColumnIndex, "LEFT")
    }

    const onMoveTaskRight = () => {
        mutations.moveTaskToColumn(task.id, currentColumnIndex, "RIGHT")
    }
    return (
        <li className="Column__item card"
            onDoubleClick={onDoubleClick}
            >
            {
                isEditable ? 
                <textarea onBlur={onBlur} onKeyDown={onKeyDown}>{task.title}</textarea> :
                <div className="card-header Task__title">
                    {task.title}
                </div>
            }
            <div className="card-footer Task__actions">
                <div className="left">
                    <button className="btn" onClick={onMoveTaskLeft}>
                        <i className="icon icon-arrow-left"/>
                    </button>
                    <button className="btn btn-error Task__delete">
                        <i className="icon icon-delete"/>
                    </button>
                </div>
 
                <div className="btn right" onClick={onMoveTaskRight}>
                    <i className="icon icon-arrow-right"/>
                </div>
            </div>

        </li>
    )
}
export default Task;