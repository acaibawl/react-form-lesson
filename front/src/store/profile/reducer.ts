import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";

const init: Profile = {
  name: "",
  description: "",
  birthday: "",
  gender: "",
};

const profileReducer = reducerWithInitialState(init).case(
  profileActions.setProfile,
  (state, payload) => ({
    // 元の状態を表すstateを新しく渡された状態を表すpayloadで上書きした状態を返す
    ...state,
    ...payload
  })
);

export default profileReducer;
