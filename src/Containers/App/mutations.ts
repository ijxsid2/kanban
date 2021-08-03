
import {BoardType, AppState, TaskType, ColumnType} from "../../ModelTypes/ModelTypes"

const taskIdGenerator = (currentBoard: BoardType) => {
    const tasks = currentBoard.tasks;
    let taskId = Math.floor(Math.random()*100000000)
    while (tasks[taskId]) {
        taskId = Math.floor(Math.random()*100000000)
    }
    return taskId
}

const addTask = (state: BoardType, columnIndex: number) => {

    // title is not required as it will first create a dummy task
    // with title "Task" and then we can edit by double clicking.

    const newTaskId = String(taskIdGenerator(state));
    
    const task: TaskType = {
        title: "Task",
        id: newTaskId
    }
    const column = state.columns[columnIndex]
    
    if (column.tasks.indexOf(newTaskId) > -1) {
        return
    }

    const newState = {
        ...state,
        columns: [
            ...state.columns.slice(0, columnIndex),
            {
                ...column,
                tasks: [newTaskId].concat(column.tasks)
            },
            ...state.columns.slice(columnIndex+1),
        ],
        tasks: {
            ...state.tasks,
            [newTaskId]: task
        }
    }
    return newState
    
}

const editTask = (state: BoardType, taskId: string , title: string) => {
        
    const newState = {
        ...state,
        tasks: {
            ...state.tasks,
            [taskId]: {
                ...state.tasks[taskId],
                title: title
            }
        }
    }
    return newState;
    
}

const editColumnName = (state: BoardType,columnIndex: number, newName: string) => {
    const column = state.columns[columnIndex]
    const newState = {
        ...state,
        columns: [
            ...state.columns.slice(0, columnIndex),
            {
                ...column,
                name: newName
            },
            ...state.columns.slice(columnIndex+1),
        ]
    };
    return newState;
    
}

const moveTaskToColumn = (state: BoardType, taskId: string, currentColumnIndex: number, move: "LEFT" | "RIGHT") => {
    const numCols = state.columns.length

    // nothing to do if the task is already at end columns of the board
    if (move === "LEFT" && currentColumnIndex === 0) return state
    if (move === "RIGHT" && currentColumnIndex === numCols - 1) return state

    const columnA: ColumnType = {
        ...state.columns[currentColumnIndex],
        tasks: state.columns[currentColumnIndex].tasks.filter(task => task !== taskId)
    }
    const columnB: ColumnType = {
        ...state.columns[currentColumnIndex + (move === "LEFT" ? -1: 1)],
        tasks: state.columns[currentColumnIndex + (move === "LEFT" ? -1: 1)].tasks.concat([taskId])
    }

    const lowerIndex = move === "LEFT" ? currentColumnIndex - 1: currentColumnIndex;
    const newCols = move === "LEFT" ? 
        [
            ...state.columns.slice(0, lowerIndex),
            columnB,
            columnA,
            ...state.columns.slice(lowerIndex+2),
        ]
     :  [
        ...state.columns.slice(0, lowerIndex),
        columnA,
        columnB,
        ...state.columns.slice(lowerIndex+2),
    ]

   const newState = {
        ...state,
        columns: newCols
    };

    return newState;
    
}


const addColumn = (state: BoardType) => {
    const newState = {
        ...state,
        columns: state.columns.concat([{
            name: "New Column",
            tasks: []
        }])
    };
    return newState
};

const deleteColumn = (state: BoardType,columnIndex: number) => {
    const newState = {
        ...state,
        columns: [
            ...state.columns.slice(0, columnIndex),
            ...state.columns.slice(columnIndex + 1),
        ]
    };
    return newState
};

const deleteTask = (state: BoardType,taskId: string) => {
    const newTasks = {
        ...state.tasks
    }
    Reflect.deleteProperty(newTasks, taskId)
    const newState = {
        ...state,
        tasks: newTasks
    };
    return newState;
}

export default {
    addTask,
    editTask,
    editColumnName,
    moveTaskToColumn,
    addColumn,
    deleteColumn,
    deleteTask
}