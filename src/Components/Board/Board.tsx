import * as React from 'react'
import './Board.css'
import { BoardType, ColumnType} from "../../ModelTypes/ModelTypes";
import Column from '../Column/Column';

type Props = {
    currentBoard: BoardType
}

let Board = ({ currentBoard }: Props) => (
    <div className="Board">
        <h1 className="Board__heading">{currentBoard.boardName}</h1>
        <section className="Board__columns-section">
            {
                currentBoard.columns.map((column: ColumnType) => (
                    <Column
                        key={column.name}
                        column={column}
                        columnTasks={column.tasks.map((taskId: string) => currentBoard.tasks[taskId])}/>
                ))
            }

        </section>

    </div>
)

export default Board;