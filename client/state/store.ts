import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers, {RootState} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {MakeStore, Context, createWrapper} from "next-redux-wrapper";

const makeStore: MakeStore<RootState> = (_: Context) => createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});