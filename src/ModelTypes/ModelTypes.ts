export type TaskId = string;

export type TaskType = {
    title: string;
    description?: string;
    dueDate?: Date;
    id: TaskId;
}

export type ColumnType = { 
    name: string;
    description?: string;
    tasks: TaskId[];
}

export type BoardType = {
    boardName: string;
    description?: string;
    columns: ColumnType[];
    tasks: {
        [key: string]: TaskType
    }

}

export type AppState = {
    boards: BoardType[];
    searchTerm?: string;
    currentBoard: number; // Index of the board selected for now.
}