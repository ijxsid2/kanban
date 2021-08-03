import * as React from 'react'
import {BoardType, AppState, TaskType, ColumnType} from "../../ModelTypes/ModelTypes"
import Board from '../../Components/Board/Board';
import MutationsContext from "./MutationsContext"
import mutations from './mutations';

const LOCAL_STORE_KEY = "BOARD_TWELLO_STATE";

const initialBoard: BoardType = {
    boardName: "Tasks for Me",
    columns: [
        {name: "To Do", tasks: ["1"]},
        {name: "In Progress", tasks: []},
        {name: "Completed", tasks: []},
    ],
    tasks: {
        "1": {title: "Visit grocery shop", id: "1"}
    }
}


let Container = () =>  {

    const [boardState, setBoardState] = React.useState<BoardType>(initialBoard)
    const [searchTerm, setSearchTerm] = React.useState("");


    React.useEffect(() => {
        try {
            const localState: BoardType = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY))
            if (localState) {
                setBoardState(localState);
            }
        }
        catch {
            setBoardState(initialBoard);
        }
    }, [])

    const changeBoardState = (newState: BoardType) => {
        localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(newState));
        setBoardState(newState)
    }

    const addTask = (title: string, columnIndex: number) => {

        // title is not required as it will first create a dummy task
        // with title "Task" and then we can edit by double clicking.
       
        changeBoardState(mutations.addTask(boardState,columnIndex));
        
    }

    
    const editTask = (taskId: string , title: string) => {
        changeBoardState(mutations.editTask(boardState, taskId, title));
    }

    const editColumnName = (columnIndex: number, newName: string) => {
        changeBoardState(mutations.editColumnName(boardState,columnIndex, newName));
    }


    const moveTaskToColumn = (taskId: string, currentColumnIndex: number, move: "LEFT" | "RIGHT") => {
        changeBoardState(mutations.moveTaskToColumn(boardState,taskId, currentColumnIndex,move));   
    }

    const addColumn = () => {
        changeBoardState(mutations.addColumn(boardState)); 
    };

    const deleteColumn = (columnIndex: number) => {
        changeBoardState(mutations.deleteColumn(boardState,columnIndex)); 
    };

    const deleteTask = (taskId: string) => {
        changeBoardState(mutations.deleteTask(boardState,taskId)); 
    }

    return (
        <MutationsContext.Provider value={{
            addTask,
            editTask,
            editColumnName,
            moveTaskToColumn,
            addColumn,
            deleteColumn,
            deleteTask
        }}>
            <Board currentBoard={boardState}/>
        </MutationsContext.Provider>
    )
}

export default Container;