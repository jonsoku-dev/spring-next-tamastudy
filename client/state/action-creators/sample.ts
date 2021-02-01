import {
    Action,
    DeleteCellAction,
    Direction,
    InsertCellBeforeAction,
    MoveCellAction,
    UpdateCellAction
} from "../actions";
import {ActionType} from "../action-types";
import axios from "axios";
import {Dispatch} from "redux";
import {RootState} from "../reducers";
import {CellTypes} from "../interfaces";

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id,
            content
        }
    }
};
export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id
    }
};
export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionType.MOVE_CELL,
        payload: {
            id, direction
        }
    }
};
export const insertCellBefore = (id: string, cellType: CellTypes): InsertCellBeforeAction => {
    return {
        type: ActionType.INSERT_CELL_BEFORE,
        payload: {
            id,
            type: cellType
        }
    }
};


export const fetchCell2 = () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const {cells: {loading}} = getState()
    console.log(loading)
    dispatch({
        type: ActionType.DELETE_CELL,
        payload: "1234"
    })
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(data)
        dispatch({
            type: ActionType.DELETE_CELL,
            payload: "1234"
        })
    } catch (err) {
        dispatch({
            type: ActionType.DELETE_CELL,
            payload: "1234"
        })
    }
}