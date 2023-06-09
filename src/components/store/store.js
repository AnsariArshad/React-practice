import reducer from './reducer';
import {  createStore} from "redux";
import { loadState } from "../localStorage";

const persistedState = loadState();
export const store=createStore(reducer,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__());