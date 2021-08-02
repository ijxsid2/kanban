export type Mutations = {
    addTask: (title: string, columnIndex: number) => void;
    editTask: (taskId:string, title: string) => void;
    editColumnName: (columnIndex: number, newName: string) => void;
    moveTaskToColumn: (taskId: string, currentColumnIndex: number, move: "LEFT" | "RIGHT") => void;
    addColumn: () => void;
    deleteColumn: (columnIndex: number) => void;
}