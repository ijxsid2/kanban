import * as React from 'react'
import {Mutations} from '../../ModelTypes/MutationTypes'

const mutationsAvailable: Mutations = {
    addTask: (_title, _columnIndex) => { return },
    editTask: (_taskId, _title) => { return },   
    editColumnName: (_columnIndex, _newName) => { return }
}

const MutationContext = React.createContext(mutationsAvailable)

export default MutationContext