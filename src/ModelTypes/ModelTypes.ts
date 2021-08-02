export type TaskId = string;

export type Task = {
    title: string;
    description?: string;
    dueDate?: Date;
    id: TaskId;
}

export type Column = { 
    name: string;
    description?: string;
    tasks: TaskId[];
}

export type Board = {
    boardName: string;
    description?: string;
    columns: Column[];
    tasks: {
        [key: string]: Task
    }

}

export type AppState = {
    boards: Board[];
    searchTerm?: string;
    currentBoard: number; // Index of the board selected for now.
}