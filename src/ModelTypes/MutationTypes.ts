export type Mutations = {
    addTask: (title: string, columnIndex: number) => void;
    editTask: (taskId:string, title: string) => void;
    editColumnName: (columnIndex: number, newName: string) => void;
}