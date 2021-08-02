import * as React from 'react'
import './Task.css'
import {TaskType} from "../../ModelTypes/ModelTypes";

type Props = {
    task: TaskType
}

let Task = ({ task }: Props) => {
    const [isEditable, setIsEditable] = React.useState<boolean>(false)

    const onDoubleClick = () => {
        setIsEditable(true)
    }

    const onBlur = () => {
        setIsEditable(false);
    }
    return (
        <li className="Column__item card"
            onDoubleClick={onDoubleClick}
            >
            {
                isEditable ? 
                <textarea onBlur={onBlur}>{task.title}</textarea> :
                <div className="card-header Task__title">
                    {task.title}
                </div>
            }
            <div className="card-footer Task__actions">
                <div className="left">
                    <button className="btn">
                        <i className="icon icon-arrow-left"/>
                    </button>
                    <button className="btn btn-error Task__delete">
                        <i className="icon icon-delete"/>
                    </button>
                </div>
 
                <div className="btn right">
                    <i className="icon icon-arrow-right"/>
                </div>
            </div>

        </li>
    )
}
export default Task;