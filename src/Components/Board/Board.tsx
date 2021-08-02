import * as React from 'react'
import './Board.css'
import { BoardType, ColumnType} from "../../ModelTypes/ModelTypes";
import Column from '../Column/Column';

type Props = {
    currentBoard: BoardType
    addTask: (title: string, index: number) => void
}

let Board = ({ currentBoard, addTask }: Props) => (
    <div className="Board">
        <h1 className="Board__heading">{currentBoard.boardName}</h1>
        <section className="Board__columns-section">
            {
                currentBoard.columns.map((column: ColumnType, index:number) => (
                    <Column
                        key={column.name}
                        column={column}
                        columnTasks={column.tasks.map((taskId: string) => currentBoard.tasks[taskId])}
                        addTask={() => addTask("", index)}
                    />
                ))
            }

        </section>

    </div>
)

export default Board;