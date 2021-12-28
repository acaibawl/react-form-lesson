import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";
import { Career } from "../../domain/entity/career";

const init: Profile = {
  name: "",
  description: "",
  birthday: "",
  gender: "",
  address: {
    postalcode: "",
    prefecture: "",
    city: "",
    restAddress:""
  },
  careers: [],
  college: {
    name: "",
    faculty: "",
    department: ""
  }
};

const initCareer: Career = {
  company: "",
  position: "",
  startAt: "",
  endAt: "",
};

const profileReducer = reducerWithInitialState(init)
.case(profileActions.setProfile, (state, payload) => ({
    // 元の状態を表すstateを新しく渡された状態を表すpayloadで上書きした状態を返す
    ...state,
    ...payload
  }))
  .case(profileActions.setAddress, (state, payload) => ({
    // addressの内容だけ新しい状態で更新
    ...state,
    address: { ...state.address, ...payload}
  }))
  .case(profileActions.searchAddress.done, (state, payload) => ({
    ...state,
    address: { ...state.address, ...payload.result }
  }))
  .case(profileActions.setCarrer, (state, payload) => ({
    ...state,
    careers: state.careers.map((c, i) =>
      i === payload.index ? { ...c, ...payload.career } : c 
    )
  }))
  .case(profileActions.deleteCareer, (state, payload) => ({
    ...state,
    careers: state.careers.filter((_, i) => i !== payload)
  }))
  .case(profileActions.addCareer, state => ({
    ...state,
    careers: [...state.careers, initCareer]
  }))
  .case(profileActions.setCollege, (state, payload) => ({
    ...state,
    college: { ...state.college, ...payload}
  })
);

export default profileReducer;
