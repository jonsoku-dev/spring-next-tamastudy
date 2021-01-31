import {combineReducers} from "redux";
import cellsReducer from './cellsReducer'
import {HYDRATE} from "next-redux-wrapper";

const reducers = (state: any, action: any) => {
    switch (action.type) {
        case HYDRATE:
            console.log('this is HYDRATE')
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                cells: cellsReducer
            })
            return combinedReducer(state, action)
        }
    }
}

export default reducers;

export type RootState = ReturnType<typeof reducers>