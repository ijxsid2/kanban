import * as React from 'react'
import {BoardType, AppState, TaskType} from "../../ModelTypes/ModelTypes"
import Board from '../../Components/Board/Board';
import MutationsContext from "./MutationsContext"


const initialBoard: BoardType = {
    boardName: "Tasks for Me",
    columns: [
        {name: "To Do", tasks: ["1"]},
        {name: "In Progress", tasks: []},
        {name: "Completed", tasks: []},
        {name: "In Freeze", tasks: []},
    ],
    tasks: {
        "1": {title: "Visit grocery shop", id: "1"}
    }
}
const taskIdGenerator = (currentBoard: BoardType) => {
    const tasks = currentBoard.tasks;
    let taskId = Math.floor(Math.random()*100000000)
    while (tasks[taskId]) {
        taskId = Math.floor(Math.random()*100000000)
    }
    return taskId
}


let Container = () =>  {
    const [boardState, setBoardState] = React.useState<BoardType>(initialBoard)
    const [searchTerm, setSearchTerm] = React.useState("");

    const addTask = (title: string, columnIndex: number) => {
        const newTaskId = String(taskIdGenerator(boardState));
        
        const task: TaskType = {
            title: "Task",
            id: newTaskId
        }
        const column = boardState.columns[columnIndex]
        
        if (column.tasks.indexOf(newTaskId) > -1) {
            return
        }

        const newState = {
            ...boardState,
            columns: [
                ...boardState.columns.slice(0, columnIndex),
                {
                    ...column,
                    tasks: [newTaskId].concat(column.tasks)
                },
                ...boardState.columns.slice(columnIndex+1),
            ],
            tasks: {
                ...boardState.tasks,
                [newTaskId]: task
            }
        }
        setBoardState(newState);
        
    }

    
    const editTask = (taskId: string , title: string) => {
        
        const newState = {
            ...boardState,
            tasks: {
                ...boardState.tasks,
                [taskId]: {
                    ...boardState.tasks[taskId],
                    title: title
                }
            }
        }
        setBoardState(newState);
        
    }

    const editColumnName = React.useCallback((columnIndex: number, newName: string) => {
        const column = boardState.columns[columnIndex]
        const newState = {
            ...boardState,
            columns: [
                ...boardState.columns.slice(0, columnIndex),
                {
                    ...column,
                    name: newName
                },
                ...boardState.columns.slice(columnIndex+1),
            ]
        };
        setBoardState(newState);
        
    }, [boardState])



    return (
        <MutationsContext.Provider value={{
            addTask: addTask,
            editTask: editTask,
            editColumnName: editColumnName
        }}>
            <Board currentBoard={boardState}/>
        </MutationsContext.Provider>
    )
}

export default Container;