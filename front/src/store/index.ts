import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profile/reducer";
import { RootState } from "../domain/entity/rootState";
import collegeReducer from "./colleges/reducer";
import validationReducer from "./validation/reducer";
import alertReducer from "./alert/reducer";

const store = createStore(
  combineReducers<RootState>({
    profile: profileReducer,
    colleges: collegeReducer,
    validation: validationReducer,
    alert: alertReducer
  }),
  compose(                                      // Redux Dev Toolとmiddlewareをまとめてstoreに登録する
    applyMiddleware(thunk),                     // redux-thunkという外部ライブラリをredux登録する
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
