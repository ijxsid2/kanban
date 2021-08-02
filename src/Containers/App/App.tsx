import * as React from 'react'
import {BoardType, AppState} from "../../ModelTypes/ModelTypes"
import Board from '../../Components/Board/Board';


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
const initialState: AppState = {
    boards: [initialBoard],
    searchTerm: undefined,
    currentBoard: 0

}



let Container = () =>  {
    const [appState, setAppState] = React.useState<AppState>(initialState)

    return (
        <Board currentBoard={appState.boards[appState.currentBoard]}/>
    )
}

export default Container;